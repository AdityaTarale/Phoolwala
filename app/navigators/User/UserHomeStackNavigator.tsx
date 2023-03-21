import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { UserHomeScreen, WelcomeScreen } from "../../screens"
import { ROUTES } from "../routes"

export type UserHomeStackNavigatorParamList = {
  Home: undefined
}

const Stack = createStackNavigator<UserHomeStackNavigatorParamList>()
export const UserHomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ cardStyle: { backgroundColor: "transparent" }, headerShown: false }}
      initialRouteName={ROUTES.User.UserHome as keyof UserHomeStackNavigatorParamList}
    >
      <Stack.Screen
        name={ROUTES.User.UserHome as keyof UserHomeStackNavigatorParamList}
        component={UserHomeScreen}
      />
    </Stack.Navigator>
  )
}
