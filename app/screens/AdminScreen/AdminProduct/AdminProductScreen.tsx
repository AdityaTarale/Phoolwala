import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, FlatList, View, ImageStyle, TouchableOpacity } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AutoImage, Box, Screen, Text } from "../../../components"
import { AdminNavigatorParamList } from "../../../navigators/Admin/AdminNavigator"
import { useHeader } from "../../../utils/useHeader"
import { colors, spacing } from "../../../theme"
import { goBack } from "../../../navigators"
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

    const [products, setProducts] = useState<any>(myProductDummyData)

    // useEffect(() => {
    //   fetch("https://www.phoolvala.com/products/getProduct")
    //     .then((res: any) => console.log("aditya", res))
    //     .catch((err) => console.warn(err))
    // }, [])

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
        <FlatList
          data={products}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={$separator} />}
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
  // paddingTop: spacing.large + spacing.extraLarge,
  paddingBottom: spacing.huge,
  paddingHorizontal: spacing.large,
}

const $separator: ViewStyle = { height: 20 }

const myProductDummyData = [
  {
    _id: "640309110c0c2272560ba69d",
    merchantId: "640305783d8631bbf837888d",
    productName: "mala..",
    price: 500,
    categoryId: "6402f9233cfa11d4130cdedb",
    productDescription: "phol mala",
    productQuantity: 100,
    productImage: [],
    status: 0,
    is_deleted: "0",
    createdAt: "2023-03-04T09:02:09.349Z",
    updatedAt: "2023-03-04T10:46:08.613Z",
    __v: 0,
  },
  {
    _id: "64031ed8dc669fd3d0910099",
    merchantId: "640305783d8631bbf837888d",
    productName: "mala",
    price: 500,
    categoryId: "6402f9233cfa11d4130cdedb",
    productDescription: "phol mala test",
    productQuantity: 100,
    productImage: [
      {
        fieldname: "productImage",
        originalname: "pholMala.jpg",
        encoding: "7bit",
        mimetype: "image/jpeg",
        destination: "F:\\pholwala_mongo\\pholwala_mongo\\public\\product_images",
        filename: "1677926104068pholMala.jpg",
        path: "F:\\pholwala_mongo\\pholwala_mongo\\public\\product_images\\1677926104068pholMala.jpg",
        size: 38727,
      },
    ],
    status: 0,
    is_deleted: "0",
    createdAt: "2023-03-04T10:35:04.085Z",
    updatedAt: "2023-03-04T10:42:49.371Z",
    __v: 0,
  },
  {
    _id: "64031edfdc669fd3d091009b",
    merchantId: "640305783d8631bbf837888d",
    productName: "mala",
    price: 500,
    categoryId: "6402f9233cfa11d4130cdedb",
    productDescription: "phol mala test 2",
    productQuantity: 100,
    productImage: [
      {
        fieldname: "productImage",
        originalname: "pholMala.jpg",
        encoding: "7bit",
        mimetype: "image/jpeg",
        destination: "F:\\pholwala_mongo\\pholwala_mongo\\public\\product_images",
        filename: "1677926111044pholMala.jpg",
        path: "F:\\pholwala_mongo\\pholwala_mongo\\public\\product_images\\1677926111044pholMala.jpg",
        size: 38727,
      },
    ],
    status: 0,
    is_deleted: "0",
    createdAt: "2023-03-04T10:35:11.047Z",
    updatedAt: "2023-03-04T10:35:11.047Z",
    __v: 0,
  },
]
