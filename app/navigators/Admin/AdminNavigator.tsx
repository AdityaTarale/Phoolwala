import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import { ROUTES } from "../routes"
import { AdminDrawerNavigator } from "./AdminDrawerNavigator"
import { AdminMerchantStackNavigator } from "./AdminMerchantStackNavigator"

export type AdminNavigatorParamList = {
  AdminDrawerStack: undefined
  AdminMerchantStack: { merchantId: string }
}

const Stack = createStackNavigator<AdminNavigatorParamList>()
export const AdminNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ cardStyle: { backgroundColor: "transparent" }, headerShown: false }}
      initialRouteName={ROUTES.Admin.AdminDrawerStack as keyof AdminNavigatorParamList}
    >
      <Stack.Screen
        name={ROUTES.Admin.AdminDrawerStack as keyof AdminNavigatorParamList}
        component={AdminDrawerNavigator}
      />
      <Stack.Screen
        name={ROUTES.Admin.AdminMerchantStack as keyof AdminNavigatorParamList}
        component={AdminMerchantStackNavigator}
      />
    </Stack.Navigator>
  )
}
