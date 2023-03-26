/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { CustomDrawer } from "./CustomDrawer"
import { AdminHomeScreen } from "../../screens"
import { ROUTES } from "../routes"
import { Icon } from "../../components"
import { colors } from "../../theme"

const Drawer = createDrawerNavigator()

export const AdminHomeStackNavigator = () => {
  const arrayOfScreens = [
    {
      id: "0",
      stackName: ROUTES.Admin.AdminHome,
      screen: AdminHomeScreen,
      label: "Home",
      icon: <Icon icon="x" />,
    },
  ]

  return (
    <Drawer.Navigator
      initialRouteName={ROUTES.Admin.AdminHome}
      screenOptions={{
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
              headerTitle: "",
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
