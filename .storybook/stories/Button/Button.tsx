import React, { ReactNode } from "react";
import { Button, IButtonProps, Image, Text } from "native-base";
import { ButtonStyle } from "./Button.style";

export type ButtonProps = {
  children: ReactNode;
  shadow?: "0" | "1" | "2" | "3" | "4" | "5";
  type?: "standard" | "action";
  width: number | null;
  url?: "string";
} & IButtonProps;

export const MyButton = ({
  children,
  type = "standard",
  shadow = "5",
  width = 180,
  url,
}: ButtonProps) => {
  // Definindo a cor de fundo e a cor do texto com base no tipo
  const style = ButtonStyle(type);
  return (
    <Button
      bg={style.bgColor} // Aplicando a cor de fundo baseada no tipo
      // Aplicando a cor do texto baseada no tipo
      rounded={28.5}
      shadow={shadow}
      width={`${width}px`}
    >
      <Text
        color={style.textColor}
        fontFamily={"Sofiapro-Light"}
        fontSize={"sm"}
        justifyContent={"space-evenly"}
      >
        {url && type === "standard" && <Image src={url} alt="Button image" />}{" "}
        {children}
      </Text>
    </Button>
  );
};
