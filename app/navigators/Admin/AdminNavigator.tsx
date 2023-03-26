import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import {
  AdminEmployeeScreen,
  AdminMerchantScreen,
  AdminAddMerchantScreen,
  AdminMerchantDetailsScreen,
} from "../../screens"
import { ROUTES } from "../routes"
import { AdminOrderScreen } from "../../screens/AdminScreen/AdminOrder"
import { AdminHomeStackNavigator } from "./AdminHomeStackNavigator"
import { AdminAddMerchantProductScreen } from "../../screens/AdminScreen/AdminMerchantDetails/AdminAddMerchantProductScreen"

export type AdminNavigatorParamList = {
  AdminHomeStack: undefined
  AdminMerchant: undefined
  AdminMerchantDetails: undefined
  AdminAddMerchant: undefined
  AdminAddMerchantDetails: undefined
  AdminEmployee: undefined
  AdminOrder: undefined
}

const Stack = createStackNavigator<AdminNavigatorParamList>()
export const AdminNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ cardStyle: { backgroundColor: "transparent" }, headerShown: false }}
      initialRouteName={ROUTES.Admin.AdminHomeStack as keyof AdminNavigatorParamList}
    >
      <Stack.Screen
        name={ROUTES.Admin.AdminHomeStack as keyof AdminNavigatorParamList}
        component={AdminHomeStackNavigator}
      />
      <Stack.Screen
        name={ROUTES.Admin.AdminMerchant as keyof AdminNavigatorParamList}
        component={AdminMerchantScreen}
      />
      <Stack.Screen
        name={ROUTES.Admin.AdminAddMerchant as keyof AdminNavigatorParamList}
        component={AdminAddMerchantScreen}
      />
      <Stack.Screen
        name={ROUTES.Admin.AdminMerchantDetails as keyof AdminNavigatorParamList}
        component={AdminMerchantDetailsScreen}
      />
      <Stack.Screen
        name={ROUTES.Admin.AdminAddMerchantDetails as keyof AdminNavigatorParamList}
        component={AdminAddMerchantProductScreen}
      />
      <Stack.Screen
        name={ROUTES.Admin.AdminEmployee as keyof AdminNavigatorParamList}
        component={AdminEmployeeScreen}
      />
      <Stack.Screen
        name={ROUTES.Admin.AdminOrder as keyof AdminNavigatorParamList}
        component={AdminOrderScreen}
      />
    </Stack.Navigator>
  )
}
