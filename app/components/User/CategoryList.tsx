import * as React from "react"
import {
  ImageBackground,
  StyleProp,
  TextStyle,
  ViewStyle,
  FlatList,
  ImageStyle,
} from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing, typography } from "../../theme"
import { Text, Box } from ".."

function CategoryBox({ title, imageUrl }) {
  return (
    <Box style={$categoryBoxContainer}>
      <Box style={$categoryBoxCard}>
        <ImageBackground source={{ uri: imageUrl }} style={$categoryBoxImage}>
          <Text style={$categoryBoxCardTitle}>{title}</Text>
        </ImageBackground>
      </Box>
    </Box>
  )
}

export interface CategoryListProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Category list for home screen
 */
export const CategoryList = observer(function CategoryList(props: CategoryListProps) {
  const { style } = props
  const $styles = [$container, style]

  return (
    <Box style={$styles}>
      <Text style={$text}>Top Categories to explore</Text>
      <Box marginVertical={spacing.medium}>
        <FlatList
          data={flowers}
          horizontal
          renderItem={({ item }) => <CategoryBox title={item.name} imageUrl={item.imageUrl} />}
          keyExtractor={(item) => item.name}
        />
      </Box>
    </Box>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
  marginVertical: 20,
}

const $text: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 16,
  fontWeight: "400",
}

const $categoryBoxCard: ViewStyle = {
  overflow: "hidden",
  padding: 0,
}

const $categoryBoxCardTitle: TextStyle = {
  bottom: 5,
  color: colors.palette.accent100,
  fontSize: 18,
  fontWeight: "800",
  left: 10,
  position: "absolute",
  width: 170,
}

const $categoryBoxContainer: ViewStyle = {
  position: "relative",
  width: 170,
}

const $categoryBoxImage: ImageStyle = {
  aspectRatio: 5 / 6,
  height: 170,
}

// Will come from backend service
const flowers = [
  {
    name: "Flowers",
    imageUrl:
      "https://images.unsplash.com/photo-1578439231583-9eca0a363860?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cm9zZXN8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    name: "Bookey",
    imageUrl: "https://4.imimg.com/data4/KF/AX/MY-16704828/home-furniture-250x250.jpg",
  },
  {
    name: "Mala",
    imageUrl: "https://m.media-amazon.com/images/I/61dPpVHCy3L._SL1280_.jpg",
  },
  {
    name: "Gajra",
    imageUrl: "https://www.tikli.in/wp-content/uploads/2021/04/Gajra-Flower-1-1.jpg",
  },
]
