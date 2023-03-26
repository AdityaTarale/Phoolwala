import React, { useState } from "react"
import {
  FlatList,
  TouchableOpacity,
  View,
  ViewStyle,
  NativeSyntheticEvent,
  NativeScrollEvent,
  TextStyle,
  Dimensions,
} from "react-native"
import { AutoImage } from "../AutoImage"
import { Text } from "../Text"
import { Box } from "./Box"

interface Image {
  id: number
  imageUrl: string
}

interface ImageSliderProps {
  items: Array<Image>
}

export function ImageSlider({ items }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const [images, _setImages] = useState<Array<Image>>(items)

  const { width } = Dimensions.get("window")

  const renderItem = ({ item }: { item: { id: number; imageUrl: string } }) => {
    return (
      <TouchableOpacity disabled>
        <Box borderRadius={8} overflow="hidden">
          <AutoImage source={{ uri: item.imageUrl }} maxHeight={120} maxWidth={width} />
        </Box>
      </TouchableOpacity>
    )
  }

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const x = e.nativeEvent.contentOffset.x
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
          marginVertical={8}
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          width={width - 8}
        >
          {images.map((item, index) => {
            return (
              <Box
                alignItems="center"
                key={item.id}
                width={currentIndex === index ? 26 : 8}
                height={currentIndex === index ? 12 : 8}
                // backgroundColor={currentIndex === index ? theme.colors.black : theme.colors.gray}
                borderRadius={50}
                // marginHorizontal={theme.spacing.xs}
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
}

const separator = () => {
  return <View style={$separator} />
}

const $separator: ViewStyle = {
  width: 12,
}

const $indicatorText: TextStyle = {
  fontSize: 8,
}
