import React from "react"
import { Dimensions, FlatList, View, ViewStyle } from "react-native"
import { Text } from "../Text"
import { Box } from "./Box"
import { ProductCard } from "./ProductCard"
import { SectionHead } from "./SectionHead"

type ProductType = {
  id: number
  title: string
  thumbnail: string
  price: number
  details: string
  description: string
}

type ProductListHorizontalProps = {
  title: string
  products: Array<ProductType>
}

export function ProductListHorizontal({ title = "", products = [] }: ProductListHorizontalProps) {
  const width = Dimensions.get("window").width

  const renderFunction = ({ item }: { item: ProductType }) => {
    return (
      <ProductCard
        width={width - 96}
        title={item.title}
        details={item.details}
        thumbnail={item.thumbnail}
        price={item.price}
        description={item.description}
      />
    )
  }

  return (
    <Box marginVertical={16}>
      <SectionHead title={title}>
        <Box marginBottom={8}>
          <Text preset="bold">View All</Text>
        </Box>
      </SectionHead>

      <FlatList<ProductType>
        horizontal
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderFunction}
        ItemSeparatorComponent={separator}
      />
    </Box>
  )
}

const separator = () => {
  return <View style={$separator} />
}

const $separator: ViewStyle = {
  width: 12,
}
