import * as React from "react"
import { Link } from "@react-navigation/native"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "../../theme"
import { Text } from "../Text"
import { ROUTES } from "../../navigators/routes"

export interface NavLinkProps {
  to: keyof typeof ROUTES
  params?: any
  children: React.ReactElement | string
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const NavLink = observer(function NavLink(props: NavLinkProps) {
  const { to, params, children, style } = props
  const $styles = [$container, style]

  return (
    <Link to={{ screen: to, params }} style={style}>
      <View style={$styles}>
        <Text style={$text}>{children}</Text>
      </View>
    </Link>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
}

const $text: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: colors.palette.primary500,
}
