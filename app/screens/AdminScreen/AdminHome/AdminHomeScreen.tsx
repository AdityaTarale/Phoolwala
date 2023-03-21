import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, FlatList } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Box, Screen, Text } from "../../../components"
import { spacing } from "../../../theme"
import { useHeader } from "../../../utils/useHeader"
import OptionCard from "./OptionCard"
import { AdminNavigatorParamList } from "../../../navigators/Admin/AdminNavigator"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `AdminHome: undefined` to AppStackParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="AdminHome" component={AdminHomeScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const AdminHomeScreen: FC<StackScreenProps<AdminNavigatorParamList, "AdminHome">> = observer(
  function AdminHomeScreen(__props) {
    useHeader({
      title: "",
    })

    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    const { navigation } = __props

    const renderItem = ({ item }) => {
      return (
        <Box>
          <OptionCard
            option={{ name: item.name, color: item.color }}
            onPress={() => {
              navigation.navigate(item.screenTo)
            }}
          />
        </Box>
      )
    }

    return (
      <Screen
        style={$root}
        preset="scroll"
        safeAreaEdges={["bottom"]}
        contentContainerStyle={$container}
      >
        <Box alignItems="center">
          <Text preset="bold">Total Sales</Text>
          <Text preset="heading">₹ 20,863.00</Text>
          {/* <AutoImage
            maxWidth={width - spacing.large - spacing.large}
            source={{
              uri: "https://i.pinimg.com/originals/5e/c1/e4/5ec1e4334c19f6310a1edb1ca71e94a0.jpg",
            }}
          /> */}
        </Box>
        <Box marginTop={spacing.massive}>
          <FlatList
            data={adminHomeScreenOptions}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={$columnWrapperStyle}
          />
        </Box>
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}

const $container: ViewStyle = {
  // paddingTop: spacing.large + spacing.extraLarge,
  paddingBottom: spacing.huge,
  paddingHorizontal: spacing.large,
}

const $columnWrapperStyle: ViewStyle = {
  justifyContent: "space-around",
  marginBottom: 16,
}

const adminHomeScreenOptions = [
  {
    id: 1,
    name: "Product",
    color: "#FF8F9C",
    screenTo: "AdminProduct",
  },
  {
    id: 2,
    name: "Merchant",
    color: "#41BFFF",
    screenTo: "AdminMerchant",
  },
  {
    id: 3,
    name: "Employee",
    color: "#56D1B7",
    screenTo: "AdminEmployee",
  },
  {
    id: 4,
    name: "Order",
    color: "#FEC830",
    screenTo: "AdminOrder",
  },
]
