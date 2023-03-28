import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import { ROUTES } from "../routes"

import {
  AdminAddMerchantScreen,
  AdminMerchantDetailsScreen,
  AdminAddMerchantProductScreen,
} from "../../screens"

export type AdminMerchantStackNavigatorParamList = {
  AdminAddMerchant: { merchantId: string }
  AdminMerchantDetails: { merchantId: string }
  AdminAddMerchantDetails: { merchantId: string }
}

const Stack = createStackNavigator<AdminMerchantStackNavigatorParamList>()
export const AdminMerchantStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ cardStyle: { backgroundColor: "transparent" }, headerShown: false }}
    >
      <Stack.Screen
        name={ROUTES.Admin.AdminMerchantDetails as keyof AdminMerchantStackNavigatorParamList}
        component={AdminMerchantDetailsScreen}
      />
      <Stack.Screen
        name={ROUTES.Admin.AdminAddMerchant as keyof AdminMerchantStackNavigatorParamList}
        component={AdminAddMerchantScreen}
      />
      <Stack.Screen
        name={ROUTES.Admin.AdminAddMerchantDetails as keyof AdminMerchantStackNavigatorParamList}
        component={AdminAddMerchantProductScreen}
      />
    </Stack.Navigator>
  )
}
