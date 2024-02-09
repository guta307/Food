import { Heading, ITextProps, Text } from "native-base";
import React, { ReactNode } from "react";

export type TitleProps = {
  size?: "xl" | "2xl" | "3xl" | "xxl" | "2xxl";
  color?: string;
  children: ReactNode;
} & ITextProps;

export const Title = ({
  size = "xl",
  color = "#000",
  children,
  ...rest
}: TitleProps) => {
  return (
    <Text fontSize={size} color={color} fontFamily={"Sofiapro-Bold"} {...rest}>
      {children}
    </Text>
  );
};
