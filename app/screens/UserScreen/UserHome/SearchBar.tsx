import React, { useMemo } from "react"
import { Box, Icon, TextField, TextFieldAccessoryProps } from "../../../components"
import { colors } from "../../../theme"

export function SearchBar() {
  const PasswordLeftAccessory = useMemo(
    () =>
      function PasswordLeftAccessory(props: TextFieldAccessoryProps) {
        return (
          <Icon
            icon={"components"}
            color={colors.palette.neutral800}
            containerStyle={props.style}
            size={20}
          />
        )
      },
    [],
  )

  return (
    <Box marginVertical={8}>
      <TextField placeholder="Search" LeftAccessory={PasswordLeftAccessory} />
    </Box>
  )
}
