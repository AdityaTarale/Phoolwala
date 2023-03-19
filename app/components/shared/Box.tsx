import * as React from "react"
import { StyleProp, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"

export interface BoxProps extends ViewStyle {
  children: React.ReactNode | string
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const Box = observer(function Box(props: BoxProps) {
  const { children, style, ...rest } = props
  const $styles = [style, { ...rest }]

  return <View style={$styles}>{children}</View>
})
