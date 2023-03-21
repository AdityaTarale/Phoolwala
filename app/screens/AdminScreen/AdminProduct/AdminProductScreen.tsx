import React, { FC, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import {
  ViewStyle,
  FlatList,
  View,
  ImageStyle,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AutoImage, Box, Button, Screen, Text } from "../../../components"
import { AdminNavigatorParamList } from "../../../navigators/Admin/AdminNavigator"
import { useHeader } from "../../../utils/useHeader"
import { colors, spacing } from "../../../theme"
import { goBack } from "../../../navigators"
import { apiAdmin } from "../../../services/admin-api"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `AdminProduct: undefined` to AppStackParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="AdminProduct" component={AdminProductScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const AdminProductScreen: FC<StackScreenProps<AdminNavigatorParamList, "AdminProduct">> =
  observer(function AdminProductScreen() {
    useHeader({
      title: "",
      leftIcon: "back",
      onLeftPress: goBack,
    })
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()

    const [products, setProducts] = useState<any>()

    useEffect(() => {
      ;(async () => {
        try {
          const response = await apiAdmin.getProducts()
          if (response.kind === "ok") {
            setProducts(response.products)
          }
        } catch (error) {
          console.log(error)
        }
      })()
    }, [])

    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity>
          <Box flexDirection="row" alignItems="center" justifyContent="flex-start">
            <AutoImage
              maxWidth={80}
              maxHeight={80}
              style={$aspectRatioBox}
              source={{
                uri: "https://images.rawpixel.com/image_png_1300/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtczEyNy1hay02NzI2XzEucG5n.png",
              }}
            />
            <Box>
              <Text preset="subheading">{item?.productName}</Text>
              <Text preset="default">{item?.productDescription}</Text>
              <Text>Stock: {item?.productQuantity}</Text>
            </Box>
          </Box>
        </TouchableOpacity>
      )
    }

    return (
      <Screen style={$root} preset="scroll" contentContainerStyle={$container}>
        <Box flex={1}>
          <ScrollView horizontal>
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
          text="+Add Product"
          style={$tapButton}
          preset="reversed"
          onPress={() => {}}
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

const $separator: ViewStyle = { height: 20 }
