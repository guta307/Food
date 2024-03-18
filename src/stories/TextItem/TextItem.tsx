import { Text, ITextProps } from "native-base";
import React, { ReactNode } from "react";

export type TextItemProps = {
  color?: string;
  size?: "xs" | "sm" | "md" | "lg";
  children: ReactNode;
} & ITextProps;

export const TextItem = ({
  color = "black.100",
  size = "md",
  children,
  textAlign = "center",
  fontFamily = "Sofiapro-Regular",
  ...rest
}: TextItemProps) => {
  return (
    <Text
      color={color}
      fontSize={size}
      fontFamily={fontFamily}
      flexDir={"row"}
      textAlign={textAlign}
      {...rest}
    >
      {children}
    </Text>
  );
};
