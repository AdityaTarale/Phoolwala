import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import {
  Text,
  StyleProp,
  TextStyle,
  View,
  ViewStyle,
  FlatList,
  TouchableOpacity,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Dimensions,
} from "react-native"
import { AutoImage } from "./AutoImage"
import { Box } from "./shared/Box"
import { colors, spacing } from "../theme"

interface Image {
  id: string
  imageUrl: string
}

export interface ImageSliderProps {
  items: Array<Image>
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

//
export const ImageSlider = observer(function ImageSlider(props: ImageSliderProps) {
  const { items } = props

  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const [images, _setImages] = useState<Array<Image>>(items)

  const width = Dimensions.get("window").width - 80

  const renderItem = ({ item }: { item: { id: string; imageUrl: string } }) => {
    return (
      <TouchableOpacity disabled>
        <Box borderRadius={8} overflow="hidden">
          <AutoImage source={{ uri: item.imageUrl }} maxHeight={220} maxWidth={width} />
        </Box>
      </TouchableOpacity>
    )
  }

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const x = e.nativeEvent.contentOffset.x
    console.log(+(x / width).toFixed(2))
    setCurrentIndex(Math.ceil(+(x / width)))
  }

  return (
    <Box>
      <Box>
        <FlatList
          horizontal
          pagingEnabled
          data={images}
          onScroll={onScroll}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          ItemSeparatorComponent={separator}
          keyExtractor={(item) => item.id.toString()}
          snapToAlignment="start"
          scrollEventThrottle={16}
          decelerationRate="normal"
          disableIntervalMomentum
          snapToInterval={width}
        />
        <Box
          marginVertical={spacing.small}
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          width={width}
        >
          {images.map((item, index) => {
            return (
              <Box
                alignItems="center"
                key={item.id}
                width={currentIndex === index ? 26 : 8}
                height={currentIndex === index ? 12 : 8}
                backgroundColor={
                  currentIndex === index ? colors.palette.neutral300 : colors.palette.neutral700
                }
                borderRadius={50}
                marginHorizontal={spacing.small}
              >
                {currentIndex === index && (
                  <Text style={$indicatorText}>
                    {index + 1}/{images.length}
                  </Text>
                )}
              </Box>
            )
          })}
        </Box>
      </Box>
    </Box>
  )
})

const separator = () => {
  return <View style={$separator} />
}

const $separator: ViewStyle = {
  width: 12,
}

const $indicatorText: TextStyle = {
  fontSize: 8,
  color: colors.text,
}
