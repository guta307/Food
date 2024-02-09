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
  ...rest
}: TextItemProps) => {
  return (
    <Text
      color={color}
      fontSize={size}
      fontFamily={"Sofiapro-Regular"}
      textAlign={textAlign}
      {...rest}
    >
      {children}
    </Text>
  );
};
