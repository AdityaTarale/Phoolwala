import React from "react"
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer"
import { Box, Text } from "../../components"
import { colors } from "../../theme"
import { useStores } from "../../models"
// import { ShareIcon, LogoutIcon } from "@icons"
// import { Text, Avatar } from "@shared"
// import { AvatarImage } from "@images"

export const CustomDrawer = (props) => {
  const {
    authenticationStore: { logout },
  } = useStores()
  return (
    <Box flex={1}>
      <DrawerContentScrollView {...props} style={{ flex: 1, height: 500, backgroundColor: "#fff" }}>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 8,
            paddingVertical: 16,
          }}
        >
          {/* <Avatar source={AvatarImage} size="small" /> */}
          <Box style={{ marginLeft: 16 }}>
            <Text>Admin Name</Text>
            <Text>9090909090</Text>
          </Box>
        </Box>
        {/* <DrawerItemList {...props} /> */}
        <Box>
          <DrawerItemList {...props} />
        </Box>
      </DrawerContentScrollView>

      {/* Preferences */}
      <Box
        style={{
          flex: 0.5,
          justifyContent: "flex-end",
        }}
      >
        <Text
          style={{
            //     borderBottomWidth: 1,
            borderColor: "#999",
            paddingHorizontal: 17,
            paddingVertical: 8,
          }}
        >
          Preferences
        </Text>

        <DrawerItem
          label="Logout"
          onPress={() => logout()}
          labelStyle={{
            color: colors.text,
            //     marginLeft: -16,
          }}
          //   icon={() => <LogoutIcon color={theme.color} width={20} height={20} />}
        />
      </Box>
    </Box>
  )
}
