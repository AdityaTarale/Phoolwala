import React, { FC, useState, useRef, useMemo } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TextInput, TextStyle, ActivityIndicator } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Button, Screen, Text, TextField, Icon, TextFieldAccessoryProps } from "../../../components"
import { useHeader } from "../../../utils/useHeader"
import { colors, spacing } from "../../../theme"
import { AdminMerchantStackNavigatorParamList, goBack } from "../../../navigators"
import { useStores } from "../../../models"
import { ScrollView } from "react-native-gesture-handler"
import { apiAdmin } from "../../../services/admin-api"

// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `AdminMerchant: undefined` to AppStackParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="AdminMerchant" component={AdminAddMerchantProductScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const AdminAddMerchantProductScreen: FC<
  StackScreenProps<AdminMerchantStackNavigatorParamList, "AdminAddMerchant">
> = observer(function AdminAddMerchantProductScreen(__props) {
  useHeader({
    title: "",
    leftIcon: "back",
    onLeftPress: goBack,
  })
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()

  const { navigation } = __props

  const priceInput = useRef<TextInput>()
  const categoryIdInput = useRef<TextInput>()
  const productDescriptionInput = useRef<TextInput>()
  const productQuantityInput = useRef<TextInput>()

  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [attemptsCount, setAttemptsCount] = useState(0)

  const [isLoading, setIsLoading] = useState(false)
  const [productName, setProductName] = useState("")
  const [price, setPrice] = useState("")
  const [categoryId, setCategoryId] = useState("")
  const [productDescription, setProductDescription] = useState("")
  const [productQuantity, setProductQuantity] = useState("")

  // const error = isSubmitted ? mobileNoValidationError : ""
  const error = ""

  async function handleRegister() {
    setIsSubmitted(true)
    setAttemptsCount(attemptsCount + 1)

    // if (mobileNoValidationError) return

    // Make a request to your server to get an authentication token.
    // If successful, reset the fields and set the token.
    try {
      setIsLoading(true)
      // const response = await apiAdmin.registerMerchant({
      //   productName,
      //   price,
      //   categoryId,
      //   productDescription,
      //   productQuantity,
      //   state,
      //   address,
      // })
      setIsLoading(false)
      // if (response.kind === "ok") {
      //   goBack()
      // }
    } catch (error) {
      setIsLoading(false)
    }
    setIsSubmitted(false)

    // setAuthPassword("")
    // setAuthMobileNo("")

    // We'll mock this with a fake token.
    // setAuthToken(String(Date.now()))
  }

  return (
    <Screen style={$root} preset="scroll" contentContainerStyle={$container}>
      {isLoading && <ActivityIndicator />}
      <Text testID="add-merchant-heading" text="Add Product" preset="heading" style={$signIn} />
      <Text
        text="Enter merchant's produc'ts below to continue"
        preset="subheading"
        style={$enterDetails}
      />
      <ScrollView>
        <TextField
          value={productName}
          onChangeText={setProductName}
          containerStyle={$textField}
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          label="Product Name"
          placeholder="Enter product name"
          helper={error}
          status={error ? "error" : undefined}
          onSubmitEditing={() => priceInput.current?.focus()}
        />

        <TextField
          value={price}
          onChangeText={setPrice}
          containerStyle={$textField}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          label="Price"
          placeholder="Enter price"
          helper={error}
          status={error ? "error" : undefined}
          onSubmitEditing={() => categoryIdInput.current?.focus()}
        />

        <TextField
          value={categoryId}
          onChangeText={setCategoryId}
          containerStyle={$textField}
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          keyboardType="number-pad"
          label="Select Category"
          placeholder="Enter category"
          helper={error}
          status={error ? "error" : undefined}
          onSubmitEditing={() => productDescriptionInput.current?.focus()}
        />

        <TextField
          ref={productDescriptionInput}
          value={productDescription}
          onChangeText={setProductDescription}
          containerStyle={$textField}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={isAuthPasswordHidden}
          label="Product Description"
          placeholder="Enter product description"
          onSubmitEditing={() => productQuantityInput.current?.focus()}
        />

        <TextField
          value={productQuantity}
          onChangeText={setProductQuantity}
          containerStyle={$textField}
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          label="Product Quantity"
          placeholder="Enter product quantity"
          onSubmitEditing={handleRegister}
        />

        <Button
          testID="add-merchants-product-button"
          text="Submit"
          style={$tapButton}
          preset="reversed"
          onPress={handleRegister}
        />
      </ScrollView>
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

const $signIn: TextStyle = {
  marginBottom: spacing.small,
}

const $enterDetails: TextStyle = {
  marginBottom: spacing.large,
}

const $textField: ViewStyle = {
  marginBottom: spacing.large,
}
