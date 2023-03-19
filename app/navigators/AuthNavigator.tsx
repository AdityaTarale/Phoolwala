import React from "react"
import { createStackNavigator, StackScreenProps } from "@react-navigation/stack"
import { LoginScreen, RegisterScreen, WelcomeScreen } from "../screens"
import { ROUTES } from "./routes"

export type AuthNavigatorParamList = {
  Welcome: undefined
  Login: undefined
  Register: undefined
}

export type AuthStackScreenProps<T extends keyof AuthNavigatorParamList> = StackScreenProps<
  AuthNavigatorParamList,
  T
>

const Stack = createStackNavigator<AuthNavigatorParamList>()
export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ cardStyle: { backgroundColor: "transparent" }, headerShown: false }}
    >
      {/* <Stack.Screen
        name={ROUTES.Welcome as keyof AuthNavigatorParamList}
        component={WelcomeScreen}
      /> */}
      <Stack.Screen name={ROUTES.Login as keyof AuthNavigatorParamList} component={LoginScreen} />
      <Stack.Screen
        name={ROUTES.Register as keyof AuthNavigatorParamList}
        component={RegisterScreen}
      />
    </Stack.Navigator>
  )
}
