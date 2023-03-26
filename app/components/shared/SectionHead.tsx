import React, { PropsWithChildren } from "react"
import { Dimensions } from "react-native"
import { Text } from "../Text"
import { Box } from "./Box"

type SectionHeadProps = PropsWithChildren<{
  title: string
  subHead?: string
}>

export function SectionHead({ title, subHead, children }: SectionHeadProps) {
  const width = Dimensions.get("window").width - 64

  return (
    <Box>
      <Box
        marginBottom={8}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        style={{ width: width }}
      >
        <Text preset="bold">{title}</Text>
        {children}
      </Box>
      {subHead && <Text preset="bold">{subHead}</Text>}
    </Box>
  )
}
