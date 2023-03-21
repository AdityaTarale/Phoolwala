import React from "react"
import { Dimensions, TextStyle, TouchableOpacity, ViewStyle } from "react-native"
import { Text } from "../../../components"

type OptionCardProps = {
  onPress?: () => void
  option: {
    name: string
    color: string
  }
}

const OptionCard: React.FC<OptionCardProps> = ({ onPress, option }) => {
  return (
    <TouchableOpacity
      style={[$normalCardContainer, { backgroundColor: option.color }]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      {/* <AutoImage
        source={{
          uri: imageUrl,
        }}
        style={styles.option}
      /> */}
      <Text preset="bold" style={$optionText}>
        {option.name}
      </Text>
    </TouchableOpacity>
  )
}

export default OptionCard

const width = Dimensions.get("window").width - 64

const $normalCardContainer: ViewStyle = {
  alignItems: "center",
  borderRadius: 14,
  height: 175,
  justifyContent: "center",
  overflow: "hidden",
  width: width / 2 - 4,
}

// const  $option:ImageStyle = {
//     maxHeight: 175,
//     maxWidth: width / 2 - 4,
//   },

const $optionText: TextStyle = {
  color: "white",
}
