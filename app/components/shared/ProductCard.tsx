import React from "react"
import { TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/Feather"
import { colors } from "../../theme"
import { AutoImage } from "../AutoImage"
import { Text } from "../Text"
import { Box } from "./Box"

type ProductCardProps = {
  width: number
  title: string
  details: string
  thumbnail: string
  description: string
  price: number
}

export function ProductCard(props: ProductCardProps) {
  const { width, title = "", details = "", thumbnail = "", price = "", description = "" } = props

  const borderStyle = {
    borderColor: colors.background,
    borderWidth: 1,
  }

  const onPressProduct = () => {
    //     navigation.navigate("ProductDetails")
  }

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPressProduct}>
      <Box marginVertical={8} width={width} borderRadius={12} overflow="hidden" style={borderStyle}>
        <Box borderRadius={12} overflow="hidden" position="relative">
          <Box position="absolute" zIndex={1} right={8} top={6}>
            <TouchableOpacity>
              <Icon name="heart" size={20} color={colors.palette.neutral100} />
            </TouchableOpacity>
          </Box>
          <AutoImage
            maxWidth={width}
            source={{
              uri: thumbnail,
            }}
          />
        </Box>
        <Box
          flexDirection="column"
          alignItems="flex-start"
          paddingVertical={8}
          paddingHorizontal={4}
          justifyContent="space-between"
        >
          <Box>
            <Text>{title}</Text>
            <Text>{description}</Text>
            <Text>₹{price}/-</Text>
            <Text>{details}</Text>
          </Box>
        </Box>
        <Box
          paddingHorizontal={8}
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text>Tomorrow 9 AM - 12 PM</Text>
        </Box>
      </Box>
    </TouchableOpacity>
  )
}
