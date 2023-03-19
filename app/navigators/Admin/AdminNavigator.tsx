/**
|--------------------------------------------------
| Admin Navigator only for users routing purpose
|--------------------------------------------------
*/

import React from "react"
import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import { TextStyle, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Icon } from "../../components"
import { translate } from "../../i18n"
import { DemoCommunityScreen, DemoDebugScreen } from "../../screens"
import { DemoPodcastListScreen } from "../../screens/DemoPodcastListScreen"
import { colors, spacing, typography } from "../../theme"
import { AppStackParamList, AppStackScreenProps } from "../AppNavigator"
import { ROUTES } from "../routes"
import { AdminHomeStackNavigator } from "./AdminHomeStackNavigator"

export type AdminTabParamList = {
  HomeStack: { queryIndex?: string; itemIndex?: string }
  DemoCommunity: undefined
  DemoDebug: undefined
  DemoPodcastList: undefined
}

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type AdminTabScreenProps<T extends keyof AdminTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<AdminTabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<AdminTabParamList>()

export function AdminNavigator() {
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
        name={ROUTES.Admin.HomeStack as keyof AdminTabParamList}
        // component={DemoShowroomScreen}
        component={AdminHomeStackNavigator}
        options={{
          tabBarLabel: translate("userNavigator.homeTab"),
          tabBarIcon: ({ focused }) => (
            <Icon icon="components" color={focused && colors.tint} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name={ROUTES.DemoCommunity as keyof AdminTabParamList}
        component={DemoCommunityScreen}
        options={{
          tabBarLabel: translate("userNavigator.categoryTab"),
          tabBarIcon: ({ focused }) => (
            <Icon icon="components" color={focused && colors.tint} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name={ROUTES.DemoPodcastList as keyof AdminTabParamList}
        component={DemoPodcastListScreen}
        options={{
          tabBarLabel: translate("userNavigator.cartTab"),
          tabBarIcon: ({ focused }) => (
            <Icon icon="components" color={focused && colors.tint} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name={ROUTES.DemoDebug as keyof AdminTabParamList}
        component={DemoDebugScreen}
        options={{
          tabBarLabel: translate("userNavigator.profileTab"),
          tabBarIcon: ({ focused }) => (
            <Icon icon="components" color={focused && colors.tint} size={30} />
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
