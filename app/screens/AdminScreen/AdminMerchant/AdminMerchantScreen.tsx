import React, { FC, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import {
  ViewStyle,
  FlatList,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Box, Button, Screen, Text } from "../../../components"
import { AdminNavigatorParamList } from "../../../navigators/Admin/AdminNavigator"
import { colors, spacing } from "../../../theme"
import { apiAdmin } from "../../../services/admin-api"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `AdminMerchant: undefined` to AppStackParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="AdminMerchant" component={AdminMerchantScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const AdminMerchantScreen: FC<StackScreenProps<AdminNavigatorParamList, "AdminMerchant">> =
  observer(function AdminMerchantScreen(__props) {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()

    const { navigation } = __props

    const goToAddMerchantForm = () => {
      navigation.navigate("AdminMerchantStack", {
        screen: "AdminAddMerchant",
      })
    }

    const goToMerchantDetails = (merchantId: string) => {
      navigation.navigate("AdminMerchantStack", {
        screen: "AdminMerchantDetails",
        params: { merchantId: merchantId },
      })
    }

    const [products, setProducts] = useState<any>()

    useEffect(() => {
      ;(async () => {
        try {
          const response = await apiAdmin.getMerchants()
          if (response.kind === "ok") {
            setProducts(response.merchants)
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
          onPress={() => goToMerchantDetails(item._id)}
        >
          <Box flexDirection="row" alignItems="center" justifyContent="flex-start">
            <Box>
              <Text preset="subheading">{item?.merchantName}</Text>
              <Text preset="default">{item?.address}</Text>
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
            <Text preset="subheading">Merchants</Text>
          </Box>
          <ScrollView>
            <FlatList
              ListEmptyComponent={
                <Box width="100%" alignItems="center" justifyContent="center">
                  <ActivityIndicator />
                </Box>
              }
              data={products}
              renderItem={renderItem}
              ItemSeparatorComponent={() => <View style={$separator} />}
            />
          </ScrollView>
        </Box>
        <Button
          testID="add-product-button"
          text="+Add Merchant"
          style={$tapButton}
          preset="reversed"
          onPress={goToAddMerchantForm}
        />
      </Screen>
    )
  })

const $root: ViewStyle = {
  flex: 1,
}

const $container: ViewStyle = {
  flex: 1,
  // paddingTop: spacing.large + spacing.extraLarge,
  paddingBottom: spacing.huge,
  paddingHorizontal: spacing.large,
}

const $tapButton: ViewStyle = {
  marginTop: spacing.extraSmall,
}

const $merchantContainer: ViewStyle = {
  backgroundColor: colors.palette.secondary100,
  paddingHorizontal: 8,
  paddingVertical: 4,
  borderRadius: 8,
}

const $separator: ViewStyle = { height: 20 }
