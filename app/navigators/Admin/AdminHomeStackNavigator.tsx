/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { CustomDrawer } from "./CustomDrawer"
import {
  AdminDeliveryScreen,
  AdminEmployeeScreen,
  AdminFaqScreen,
  AdminMerchantScreen,
} from "../../screens"
import { ROUTES } from "../routes"
import { Icon } from "../../components"
import { colors } from "../../theme"
import { AdminOrderScreen } from "../../screens/AdminScreen/AdminOrder"

const Drawer = createDrawerNavigator()

export const AdminHomeStackNavigator = () => {
  const arrayOfScreens = [
    {
      id: "0",
      stackName: ROUTES.Admin.AdminMerchant,
      screen: AdminMerchantScreen,
      label: "Merchant",
      icon: <Icon icon="x" />,
    },
    {
      id: "2",
      stackName: ROUTES.Admin.AdminOrder,
      screen: AdminOrderScreen,
      label: "Order",
      icon: <Icon icon="x" />,
    },
    {
      id: "3",
      stackName: ROUTES.Admin.AdminEmployee,
      screen: AdminEmployeeScreen,
      label: "Users",
      icon: <Icon icon="x" />,
    },
    {
      id: "21",
      stackName: ROUTES.Admin.AdminDelivery,
      screen: AdminDeliveryScreen,
      label: "Delivery",
      icon: <Icon icon="x" />,
    },
    {
      id: "1",
      stackName: ROUTES.Admin.AdminFAQ,
      screen: AdminFaqScreen,
      label: "FAQ",
      icon: <Icon icon="x" />,
    },
  ]

  return (
    <Drawer.Navigator
      initialRouteName={ROUTES.Admin.AdminMerchant}
      screenOptions={{
        headerTitle: "Bloomb.in",
        drawerLabelStyle: {
          color: colors.text,
          // marginLeft: -16,
        },
        drawerActiveBackgroundColor: colors.background,
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      {arrayOfScreens.map((item) => {
        return (
          <Drawer.Screen
            key={item.id}
            name={item.stackName}
            component={item.screen}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: "transparent",
                borderWidth: 0,
              },
              drawerLabel: item.label,
              // drawerIcon: () => item.icon,
            }}
          />
        )
      })}
    </Drawer.Navigator>
  )
}
