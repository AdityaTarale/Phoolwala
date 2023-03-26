import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { Dimensions, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackScreenProps } from "../../../navigators"
import { AutoImage, Box, ProductListHorizontal, Screen } from "../../../components"
import { spacing } from "../../../theme"
import { useHeader } from "../../../utils/useHeader"
import { CategoryList } from "./CategoryList"
import { SearchBar } from "./SearchBar"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `UserHome: undefined` to AppStackParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="UserHome" component={UserHomeScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const UserHomeScreen: FC<StackScreenProps<AppStackScreenProps, "UserHome">> = observer(
  function UserHomeScreen() {
    const goTo = () => {
      //
    }

    const { width } = Dimensions.get("window")

    useHeader({
      title: "Face of New Market",
      rightIcon: "bell",
      onRightPress: goTo,
    })
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()

    return (
      <Screen
        style={$root}
        preset="scroll"
        safeAreaEdges={["bottom"]}
        contentContainerStyle={$container}
      >
        <SearchBar />
        <Box>
          <AutoImage
            maxWidth={width - spacing.large - spacing.large}
            source={{
              uri: "https://i.pinimg.com/originals/5e/c1/e4/5ec1e4334c19f6310a1edb1ca71e94a0.jpg",
            }}
          />
        </Box>
        <CategoryList />
        <Box>
          <ProductListHorizontal products={products} title="Today's Deal" />
          <ProductListHorizontal products={products} title="Early offer" />
          <ProductListHorizontal products={products} title="Best Seller" />
          <ProductListHorizontal products={products} title="Months special" />
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

const products = [
  {
    id: 1,
    title: "Flower 1",
    thumbnail: "https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg",
    price: 200,
    details: "500 g",
    description: "lorem Ipsum 1 ala slsshu",
  },
  {
    id: 3,
    title: "Fresh Paneer",
    details: "250 g",
    thumbnail: "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819__340.jpg",
    price: 250,
    description: "lorem Ipsum 1 ala slsshu",
  },
  {
    id: 11,
    title: "Flower 1",
    thumbnail: "https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg",
    price: 200,
    details: "500 g",
    description: "lorem Ipsum 1 ala slsshu",
  },
  {
    id: 23,
    title: "Fresh Paneer",
    details: "250 g",
    thumbnail: "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819__340.jpg",
    price: 250,
    description: "lorem Ipsum 1 ala slsshu",
  },
]
