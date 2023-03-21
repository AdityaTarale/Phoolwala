import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import {
  AdminEmployeeScreen,
  AdminHomeScreen,
  AdminMerchantScreen,
  AdminAddMerchantScreen,
  AdminProductScreen,
} from "../../screens"
import { ROUTES } from "../routes"
import { AdminOrderScreen } from "../../screens/AdminScreen/AdminOrder"

export type AdminNavigatorParamList = {
  AdminHome: undefined
  AdminProduct: undefined
  AdminMerchant: undefined
  AdminAddMerchant: undefined
  AdminEmployee: undefined
  AdminOrder: undefined
}

const Stack = createStackNavigator<AdminNavigatorParamList>()
export const AdminNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ cardStyle: { backgroundColor: "transparent" }, headerShown: false }}
      initialRouteName={ROUTES.Admin.AdminHome as keyof AdminNavigatorParamList}
    >
      <Stack.Screen
        name={ROUTES.Admin.AdminHome as keyof AdminNavigatorParamList}
        component={AdminHomeScreen}
      />
      <Stack.Screen
        name={ROUTES.Admin.AdminProduct as keyof AdminNavigatorParamList}
        component={AdminProductScreen}
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
