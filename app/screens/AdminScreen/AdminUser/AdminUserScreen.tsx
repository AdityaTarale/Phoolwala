import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import React, { FC, useEffect, useState } from "react"
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native"
import { Box, Screen, Text } from "../../../components"
import { AdminNavigatorParamList } from "../../../navigators/Admin/AdminNavigator"
import { apiAdmin } from "../../../services/admin-api"
import { colors, spacing } from "../../../theme"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `AdminProduct: undefined` to AppStackParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="AdminProduct" component={AdminUserScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const AdminUserScreen: FC<StackScreenProps<AdminNavigatorParamList, "AdminUser">> = observer(
  function AdminUserScreen(__props) {
    const { navigation } = __props

    const goToMerchantDetails = () => {
      // navigation.navigate("AdminUserDetails")
    }

    const [users, setUsers] = useState<any>()

    useEffect(() => {
      ;(async () => {
        try {
          const response = await apiAdmin.getUsers()
          if (response.kind === "ok") {
            setUsers(response.users)
          }
        } catch (error) {
          console.log(error)
        }
      })()
    }, [])

    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={$merchantContainer}
          activeOpacity={0.6}
          onPress={goToMerchantDetails}
        >
          <Box flexDirection="row" alignItems="center" justifyContent="flex-start">
            <Box>
              <Text preset="subheading">{item?.fullName}</Text>
              <Text preset="default">{item?.email}</Text>
              <Text>{item?.city}</Text>
            </Box>
          </Box>
        </TouchableOpacity>
      )
    }

    return (
      <Screen style={$root} preset="scroll" contentContainerStyle={$container}>
        <Box flex={1}>
          <Box marginVertical={12}>
            <Text preset="subheading">Users</Text>
          </Box>
          <ScrollView>
            <FlatList
              ListEmptyComponent={
                <Box width="100%" alignItems="center" justifyContent="center">
                  <ActivityIndicator />
                </Box>
              }
              data={users}
              renderItem={renderItem}
              ItemSeparatorComponent={() => <View style={$separator} />}
            />
          </ScrollView>
        </Box>
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}

const $container: ViewStyle = {
  flex: 1,
  // paddingTop: spacing.large + spacing.extraLarge,
  paddingBottom: spacing.huge,
  paddingHorizontal: spacing.large,
}

// const $tapButton: ViewStyle = {
//   marginTop: spacing.extraSmall,
// }

const $merchantContainer: ViewStyle = {
  backgroundColor: colors.palette.secondary100,
  paddingHorizontal: 8,
  paddingVertical: 4,
  borderRadius: 8,
}

const $separator: ViewStyle = { height: 20 }
