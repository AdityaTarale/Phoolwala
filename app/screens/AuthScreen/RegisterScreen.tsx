import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import React, { FC, useEffect, useMemo, useRef, useState } from "react"
import { ActivityIndicator, TextInput, TextStyle, ViewStyle } from "react-native"
import {
  Box,
  Button,
  Icon,
  NavLink,
  Screen,
  Text,
  TextField,
  TextFieldAccessoryProps,
} from "../../components"
import { useStores } from "../../models"
import { AuthStackScreenProps } from "../../navigators"
import { ROUTES } from "../../navigators/routes"
import { colors, spacing } from "../../theme"

interface RegisterScreenProps extends AuthStackScreenProps<"Register"> {}

export const RegisterScreen: FC<StackScreenProps<RegisterScreenProps>> = observer(
  function RegisterScreen(_props) {
    const authMobileNoInput = useRef<TextInput>()
    const authEmailInput = useRef<TextInput>()
    const authPasswordInput = useRef<TextInput>()

    const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [attemptsCount, setAttemptsCount] = useState(0)
    const {
      authenticationStore: {
        isLoading,
        authFullName,
        setAuthFullName,
        authEmail,
        setAuthEmail,
        authMobileNo,
        setAuthMobileNo,
        authPassword,
        setAuthPassword,
        register,
        mobileNoValidationError,
      },
    } = useStores()

    useEffect(() => {
      // Here is where you could fetch credentials from keychain or storage
      // and pre-fill the form fields.
      setAuthFullName("Aditya Tarale")
      setAuthMobileNo("9898989898")
      setAuthEmail("tarale.adi@gmail.com")
      setAuthPassword("test@123")
    }, [])

    const error = isSubmitted ? mobileNoValidationError : ""

    function handleRegister() {
      setIsSubmitted(true)
      setAttemptsCount(attemptsCount + 1)

      if (mobileNoValidationError) return

      // Make a request to your server to get an authentication token.
      // If successful, reset the fields and set the token.
      register()
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

    useEffect(() => {
      return () => {
        setAuthPassword("")
        setAuthMobileNo("")
        setAuthFullName("")
        setAuthEmail("")
      }
    }, [])

    return (
      <Screen
        preset="auto"
        contentContainerStyle={$screenContentContainer}
        safeAreaEdges={["top", "bottom"]}
      >
        {isLoading && <ActivityIndicator />}
        <Text
          testID="register-heading"
          tx="registerScreen.signUp"
          preset="heading"
          style={$signIn}
        />
        <Text tx="registerScreen.enterDetails" preset="subheading" style={$enterDetails} />
        {/* {attemptsCount > 2 && <Text tx="registerScreen.hint" size="sm" weight="light" style={$hint} />} */}
        <Box flex={1}>
          <TextField
            value={authFullName}
            onChangeText={setAuthFullName}
            containerStyle={$textField}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
            labelTx="registerScreen.fullNameFieldLabel"
            placeholderTx="registerScreen.fullNameFieldPlaceholder"
            helper={error}
            status={error ? "error" : undefined}
            onSubmitEditing={() => authEmailInput.current?.focus()}
          />

          <TextField
            value={authEmail}
            onChangeText={setAuthEmail}
            containerStyle={$textField}
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect={false}
            keyboardType="email-address"
            labelTx="registerScreen.emailFieldLabel"
            placeholderTx="registerScreen.emailFieldPlaceholder"
            helper={error}
            status={error ? "error" : undefined}
            onSubmitEditing={() => authMobileNoInput.current?.focus()}
          />

          <TextField
            value={authMobileNo}
            onChangeText={setAuthMobileNo}
            containerStyle={$textField}
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect={false}
            keyboardType="number-pad"
            labelTx="registerScreen.mobileNoFieldLabel"
            placeholderTx="registerScreen.mobileNoFieldPlaceholder"
            helper={error}
            status={error ? "error" : undefined}
            onSubmitEditing={() => authPasswordInput.current?.focus()}
          />

          <TextField
            ref={authPasswordInput}
            value={authPassword}
            onChangeText={setAuthPassword}
            containerStyle={$textField}
            autoCapitalize="none"
            autoComplete="password"
            autoCorrect={false}
            secureTextEntry={isAuthPasswordHidden}
            labelTx="registerScreen.passwordFieldLabel"
            placeholderTx="registerScreen.passwordFieldPlaceholder"
            onSubmitEditing={handleRegister}
            RightAccessory={PasswordRightAccessory}
          />
          <Button
            testID="register-button"
            tx="registerScreen.tapToSignIn"
            style={$tapButton}
            preset="reversed"
            onPress={handleRegister}
          />
        </Box>
        <Box alignItems="center">
          <NavLink to={ROUTES.Login as keyof typeof ROUTES}>Already have account? Sign in</NavLink>
        </Box>
      </Screen>
    )
  },
)

const $screenContentContainer: ViewStyle = {
  flex: 1,
  paddingVertical: spacing.huge,
  paddingHorizontal: spacing.large,
}

const $signIn: TextStyle = {
  marginBottom: spacing.small,
}

const $enterDetails: TextStyle = {
  marginBottom: spacing.large,
}

const $hint: TextStyle = {
  color: colors.tint,
  marginBottom: spacing.medium,
}

const $textField: ViewStyle = {
  marginBottom: spacing.large,
}

const $tapButton: ViewStyle = {
  marginTop: spacing.extraSmall,
}

// @demo remove-file
