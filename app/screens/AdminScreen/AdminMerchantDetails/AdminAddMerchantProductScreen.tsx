import React, { FC, useState, useRef, useMemo } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TextInput, TextStyle, ActivityIndicator } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Button, Screen, Text, TextField, Icon, TextFieldAccessoryProps } from "../../../components"
import { AdminNavigatorParamList } from "../../../navigators/Admin/AdminNavigator"
import { useHeader } from "../../../utils/useHeader"
import { colors, spacing } from "../../../theme"
import { goBack } from "../../../navigators"
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
  StackScreenProps<AdminNavigatorParamList, "AdminAddMerchant">
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

  const emailInput = useRef<TextInput>()
  const mobileNoInput = useRef<TextInput>()
  const passwordInput = useRef<TextInput>()
  const cityInput = useRef<TextInput>()
  const stateInput = useRef<TextInput>()
  const addressInput = useRef<TextInput>()

  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [attemptsCount, setAttemptsCount] = useState(0)

  const [isLoading, setIsLoading] = useState(false)
  const [merchantName, setMerchantName] = useState("")
  const [email, setEmail] = useState("")
  const [mobileNo, setMobileNo] = useState("")
  const [password, setPassword] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [address, setAddress] = useState("")

  const {
    authenticationStore: { mobileNoValidationError },
  } = useStores()

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
      const response = await apiAdmin.registerMerchant({
        merchantName,
        email,
        mobileNo,
        password,
        city,
        state,
        address,
      })
      setIsLoading(false)
      if (response.kind === "ok") {
        goBack()
      }
    } catch (error) {
      setIsLoading(false)
    }
    setIsSubmitted(false)

    // setAuthPassword("")
    // setAuthMobileNo("")

    // We'll mock this with a fake token.
    // setAuthToken(String(Date.now()))
  }

  const PasswordRightAccessory = useMemo(
    () =>
      function PasswordRightAccessory(props: TextFieldAccessoryProps) {
        return (
          <Icon
            icon={isAuthPasswordHidden ? "view" : "hidden"}
            color={colors.palette.neutral800}
            containerStyle={props.style}
            size={20}
            onPress={() => setIsAuthPasswordHidden(!isAuthPasswordHidden)}
          />
        )
      },
    [isAuthPasswordHidden],
  )

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
          value={merchantName}
          onChangeText={setMerchantName}
          containerStyle={$textField}
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          label="Merchant Name"
          placeholder="Enter full name"
          helper={error}
          status={error ? "error" : undefined}
          onSubmitEditing={() => emailInput.current?.focus()}
        />

        <TextField
          value={email}
          onChangeText={setEmail}
          containerStyle={$textField}
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect={false}
          keyboardType="email-address"
          labelTx="registerScreen.emailFieldLabel"
          placeholder="Enter email address"
          helper={error}
          status={error ? "error" : undefined}
          onSubmitEditing={() => mobileNoInput.current?.focus()}
        />

        <TextField
          value={mobileNo}
          onChangeText={setMobileNo}
          containerStyle={$textField}
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          keyboardType="number-pad"
          labelTx="registerScreen.mobileNoFieldLabel"
          placeholder="Enter mobile number"
          helper={error}
          status={error ? "error" : undefined}
          onSubmitEditing={() => passwordInput.current?.focus()}
        />

        <TextField
          ref={passwordInput}
          value={password}
          onChangeText={setPassword}
          containerStyle={$textField}
          autoCapitalize="none"
          autoComplete="password"
          autoCorrect={false}
          secureTextEntry={isAuthPasswordHidden}
          labelTx="registerScreen.passwordFieldLabel"
          placeholderTx="registerScreen.passwordFieldPlaceholder"
          onSubmitEditing={() => cityInput.current?.focus()}
          RightAccessory={PasswordRightAccessory}
        />

        <TextField
          value={city}
          onChangeText={setCity}
          containerStyle={$textField}
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          label="City"
          placeholder="Enter city name"
          onSubmitEditing={() => stateInput.current?.focus()}
        />

        <TextField
          value={state}
          onChangeText={setState}
          containerStyle={$textField}
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          label="State"
          placeholder="Enter state name"
          onSubmitEditing={() => addressInput.current?.focus()}
        />

        <TextField
          value={address}
          onChangeText={setAddress}
          containerStyle={$textField}
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          label="Address"
          placeholder="Enter full address"
          onSubmitEditing={handleRegister}
        />

        <Button
          testID="register-merchant-button"
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
