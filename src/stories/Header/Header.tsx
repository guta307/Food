import { Box, IBoxProps } from "native-base";
import React from "react";
import { WidthScreen } from "../../utils/Screensize";

export type HeaderProps = {
  leftComponent?: React.ReactNode; // Componente para o lado esquerdo
  rightComponent?: React.ReactNode; // Componente para o lado direito
} & IBoxProps;

export const HeaderBox = ({
  leftComponent,
  rightComponent,
  children,
  ...rest
}: HeaderProps) => {
  return (
    <Box
      {...rest}
      w={WidthScreen * 0.8587}
      flexDir={"row"}
      justifyContent={"space-between"}
    >
      <Box minWidth={WidthScreen * 0.113}>{leftComponent}</Box>
      <Box
        flexDir={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        w={WidthScreen * 0.4053}
      >
        {children}
      </Box>

      {rightComponent}
    </Box>
  );
};
