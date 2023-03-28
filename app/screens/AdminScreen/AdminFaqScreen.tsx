import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AdminNavigatorParamList } from "../../navigators/Admin/AdminNavigator"
import { WebView } from "react-native-webview"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `AdminFaq: undefined` to AppStackParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="AdminFaq" component={AdminFaqScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore

export const AdminFaqScreen: FC<StackScreenProps<AdminNavigatorParamList, "AdminFAQ">> = observer(
  function AdminFaqScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <WebView
        source={{ uri: "https://loremnotipsum.com/help-and-faq/?term_id=72" }}
        automaticallyAdjustContentInsets={false}
      />
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}

const $container: ViewStyle = {
  // paddingTop: spacing.large + spacing.extraLarge,
  // paddingBottom: spacing.huge,
  // paddingHorizontal: spacing.large,
}
