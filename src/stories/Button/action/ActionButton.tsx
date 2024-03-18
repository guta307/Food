import { Box, IBoxProps, ChevronLeftIcon, HamburgerIcon } from "native-base";
import React from "react";
import { WidthScreen } from "../../../utils/Screensize";

// Definindo um novo tipo que inclui IBoxProps e um novo parâmetro iconType
export type ActionButtonProps = IBoxProps & {
  iconType?: "return" | "menu";
};

export const ActionButton = ({
  iconType = "return",
  ...rest
}: ActionButtonProps) => {
  return (
    <Box
      w={WidthScreen * 0.113}
      borderWidth={1}
      borderColor={"#EEE"}
      style={{ aspectRatio: 1 }}
      shadow={2}
      alignItems={"center"}
      rounded={WidthScreen * 0.0267}
      bg={"white"}
      justifyContent={"center"}
      {...rest}
    >
      {iconType === "return" ? (
        <ChevronLeftIcon w={"50%"} />
      ) : (
        <HamburgerIcon w={"50%"} />
      )}
    </Box>
  );
};
