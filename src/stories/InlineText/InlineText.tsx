import { Box, Text } from "native-base";
import React, { ReactNode } from "react";

export type InlineTextProps = {
  color?: "gray.700" | "white";
  size?: "sm" | "md";
  children: ReactNode;
};

export const InlineText = ({ color = "white", size = "md", children }) => {
  return (
    <Box alignItems="center" flexDirection={"row"}>
      <Box
        flexGrow={1}
        height="1px"
        borderWidth={"1px"}
        borderColor={color}
        position="relative"
      />
      <Text
        color={color}
        px="2"
        fontSize={size}
        fontFamily={"Sofiapro-Regular"}
      >
        {children}
      </Text>
      <Box
        flexGrow={1}
        height="1px"
        borderWidth={"1px"}
        borderColor={color}
        position="relative"
      />
    </Box>
  );
};
