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
  TextStyle,
} from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AutoImage, Box, Button, Screen, Text } from "../../components"
import { useHeader } from "../../utils/useHeader"
import { colors, spacing } from "../../theme"
import { AdminMerchantStackNavigatorParamList, goBack } from "../../navigators"
import { apiAdmin, Merchant, Product } from "../../services/admin-api"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `AdminProduct: undefined` to AppStackParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="AdminProduct" component={AdminMerchantDetailsScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const AdminMerchantDetailsScreen: FC<
  StackScreenProps<AdminMerchantStackNavigatorParamList, "AdminMerchantDetails">
> = observer(function AdminMerchantDetailsScreen(__props) {
  useHeader({
    title: "",
    leftIcon: "back",
    onLeftPress: goBack,
  })
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()

  const { navigation, route } = __props

  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState<Array<Product>>([])
  const [merchantDetails, setMerchantDetails] = useState<Merchant>()

  useEffect(() => {
    ;(async () => {
      try {
        const response = await apiAdmin.getMerchantById(route?.params?.merchantId)
        if (response.kind === "ok") {
          setMerchantDetails(response.merchant)
        }
      } catch (error) {
        console.log(error)
      }
    })()
  }, [route?.params?.merchantId])

  useEffect(() => {
    ;(async () => {
      setIsLoading(true)
      try {
        const response = await apiAdmin.getProductByMerchantId(route?.params?.merchantId)
        if (response.kind === "ok") {
          setIsLoading(false)
          setProducts(response.products)
        }
      } catch (error) {
        setIsLoading(false)
        console.log(error)
      }
    })()
  }, [route?.params?.merchantId])

  const goToAddMerchantProductForm = () => {
    navigation.navigate("AdminAddMerchantDetails", { merchantId: route?.params?.merchantId })
  }

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
        <Box
          padding={8}
          borderRadius={8}
          marginBottom={16}
          backgroundColor={colors.palette.secondary500}
        >
          <Text preset="subheading" style={$heading}>
            {merchantDetails?.merchantName}
          </Text>
          <Text preset="bold" style={$heading}>
            {merchantDetails?.mobileNo}
          </Text>

          <Text preset="default" style={$heading}>
            Address:
            {merchantDetails?.address}
            {merchantDetails?.city} {merchantDetails?.state}
          </Text>
        </Box>
        <ScrollView>
          <FlatList
            ListEmptyComponent={
              <Box width="100%" alignItems="center" justifyContent="center">
                {isLoading ? <ActivityIndicator /> : <Text>No data found</Text>}
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
        onPress={goToAddMerchantProductForm}
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

const $heading: TextStyle = {
  color: "white",
}

const $separator: ViewStyle = { height: 20 }
