import React, { FC, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackScreenProps } from "../../navigators"
import { AutoImage, Box, Button, Screen, Text } from "../../components"
import { apiAdmin } from "../../services/admin-api"
import { spacing, colors } from "../../theme"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `AdminCategory: undefined` to AppStackParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="AdminCategory" component={AdminCategoryScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const AdminCategoryScreen: FC<StackScreenProps<AppStackScreenProps, "AdminCategory">> =
  observer(function AdminCategoryScreen(__props) {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()

    // const { navigation } = __props

    // const goToAddMerchantForm = () => {
    //   navigation.navigate("AdminAddMerchant")
    // }

    // const goToMerchantDetails = () => {
    //   navigation.navigate("AdminMerchantDetails")
    // }

    const [categories, setCategories] = useState<any>()

    useEffect(() => {
      ;(async () => {
        try {
          const response = await apiAdmin.getCategories()
          if (response.kind === "ok") {
            setCategories(response.categories)
          }
        } catch (error) {
          console.log(error)
        }
      })()
    }, [])

    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity style={$merchantContainer} activeOpacity={0.6}>
          <Box flexDirection="row" alignItems="center" justifyContent="flex-start">
            <AutoImage
              maxWidth={80}
              maxHeight={80}
              style={$aspectRatioBox}
              source={{
                uri: "https://images.rawpixel.com/image_png_1300/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtczEyNy1hay02NzI2XzEucG5n.png",
              }}
            />
            <Box marginLeft={12}>
              <Text preset="subheading">{item?.categoryName}</Text>
            </Box>
          </Box>
        </TouchableOpacity>
      )
    }

    return (
      <Screen style={$root} preset="scroll" contentContainerStyle={$container}>
        <Box flex={1}>
          <Box marginVertical={12}>
            <Text preset="subheading">Categories of Products</Text>
          </Box>
          <ScrollView>
            <FlatList
              ListEmptyComponent={
                <Box width="100%" alignItems="center" justifyContent="center">
                  <ActivityIndicator />
                </Box>
              }
              data={categories}
              renderItem={renderItem}
              ItemSeparatorComponent={() => <View style={$separator} />}
            />
          </ScrollView>
        </Box>
        <Button
          testID="add-product-button"
          text="+Add Category"
          style={$tapButton}
          preset="reversed"
          // onPress={goToAddMerchantForm}
        />
      </Screen>
    )
  })

const $aspectRatioBox: ViewStyle & ImageStyle = {
  borderRadius: 4,
  borderColor: colors.palette.secondary300,
  backgroundColor: colors.palette.neutral800,
}
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
