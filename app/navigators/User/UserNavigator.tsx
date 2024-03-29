/**
|--------------------------------------------------
| User Navigator only for users routing purpose
|--------------------------------------------------
*/

import React from "react"
import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import { TextStyle, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
// import { Icon } from "../../components"
//  <Icon icon="components" color={focused && colors.tint} size={30} />
import Icon from "react-native-vector-icons/Feather"
import { translate } from "../../i18n"
import {
  DemoCommunityScreen,
  DemoShowroomScreen,
  DemoDebugScreen,
  WelcomeScreen,
} from "../../screens"
import { DemoPodcastListScreen } from "../../screens/DemoPodcastListScreen"
import { colors, spacing, typography } from "../../theme"
import { AppStackParamList, AppStackScreenProps } from "../AppNavigator"
import { ROUTES } from "../routes"
import { UserHomeStackNavigator } from "./UserHomeStackNavigator"

export type UserTabParamList = {
  DemoCommunity: undefined
  UserHomeStack: { queryIndex?: string; itemIndex?: string }
  DemoDebug: undefined
  DemoPodcastList: undefined
}

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type UserTabScreenProps<T extends keyof UserTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<UserTabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<UserTabParamList>()

export function UserNavigator() {
  const { bottom } = useSafeAreaInsets()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [$tabBar, { height: bottom + 70 }],
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.text,
        tabBarLabelStyle: $tabBarLabel,
        tabBarItemStyle: $tabBarItem,
      }}
    >
      <Tab.Screen
        name={ROUTES.User.UserHomeStack as keyof UserTabParamList}
        // component={DemoShowroomScreen}
        component={UserHomeStackNavigator}
        options={{
          tabBarLabel: translate("userNavigator.homeTab"),
          tabBarIcon: ({ focused, color }) => (
            <Icon name="home" color={focused ? colors.tint : color} size={28} />
          ),
        }}
      />

      <Tab.Screen
        name={ROUTES.DemoCommunity as keyof UserTabParamList}
        // component={DemoCommunityScreen}
        component={WelcomeScreen}
        options={{
          tabBarLabel: translate("userNavigator.categoryTab"),
          tabBarIcon: ({ focused, color }) => (
            <Icon name="grid" color={focused ? colors.tint : color} size={28} />
          ),
        }}
      />

      <Tab.Screen
        name={ROUTES.DemoPodcastList as keyof UserTabParamList}
        // component={DemoPodcastListScreen}
        component={WelcomeScreen}
        options={{
          tabBarLabel: translate("userNavigator.cartTab"),
          tabBarIcon: ({ focused, color }) => (
            <Icon name="shopping-cart" color={focused ? colors.tint : color} size={28} />
          ),
        }}
      />

      <Tab.Screen
        name={ROUTES.DemoDebug as keyof UserTabParamList}
        // component={DemoDebugScreen}
        component={WelcomeScreen}
        options={{
          tabBarLabel: translate("userNavigator.profileTab"),
          tabBarIcon: ({ focused, color }) => (
            <Icon name="user" color={focused ? colors.tint : color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const $tabBar: ViewStyle = {
  backgroundColor: colors.background,
  borderTopColor: colors.transparent,
}

const $tabBarItem: ViewStyle = {
  paddingTop: spacing.medium,
}

const $tabBarLabel: TextStyle = {
  fontSize: 12,
  fontFamily: typography.primary.medium,
  lineHeight: 16,
  flex: 1,
}
