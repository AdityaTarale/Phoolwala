import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { AdminHomeScreen, WelcomeScreen } from "../../screens"
import { ROUTES } from "../routes"

export type AdminHomeStackNavigatorParamList = {
  Home: undefined
}

const Stack = createStackNavigator<AdminHomeStackNavigatorParamList>()
export const AdminHomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ cardStyle: { backgroundColor: "transparent" }, headerShown: false }}
      initialRouteName={ROUTES.Admin.Home as keyof AdminHomeStackNavigatorParamList}
    >
      <Stack.Screen
        name={ROUTES.Admin.Home as keyof AdminHomeStackNavigatorParamList}
        component={AdminHomeScreen}
      />
    </Stack.Navigator>
  )
}
