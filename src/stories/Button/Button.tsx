import React, { ReactNode } from "react";
import { Button, Center, IButtonProps, Image, Text, View } from "native-base";
import { ButtonStyle } from "./Button.style";

import { WidthScreen, HeightScreen } from "../../utils/Screensize";

export type ButtonProps = {
  children: ReactNode;
  shadow?: "0" | "1" | "2" | "3" | "4" | "5" | null;
  type?: "standard" | "action" | "login";
  Img?: React.ElementType; // Definindo url como um SvgProps para lidar com SVG
  FontWeight?:
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | "normal";
} & IButtonProps;

export const MyButton = ({
  children,
  type = "standard",
  shadow = "5",
  width = 180,
  Img,
  FontWeight,
  fontFamily,
  ...rest
}: ButtonProps) => {
  // Definindo a cor de fundo e a cor do texto com base no tipo
  const style = ButtonStyle(type);
  return (
    <Button
      bg={style.bgColor} // Aplicando a cor de fundo baseada no tipo
      // Aplicando a cor do texto baseada no tipo
      borderColor={style.borderColor}
      borderWidth={style.borderWidth}
      rounded={28.5}
      shadow={shadow}
      width={width}
      {...rest}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {Img && type === "standard" && (
          // Ajusta as dimensões da imagem conforme necessário
          <Img width={WidthScreen * 0.0747} height={HeightScreen * 0.0345} />
        )}
        {/* Coloca o texto dentro de um componente Text */}
        <Text
          color={style.textColor}
          fontFamily={fontFamily}
          fontSize={"sm"}
          style={{ fontWeight: FontWeight }}
          paddingLeft={Img && type === "standard" ? "10%" : 0}
          // Remover justifyContent e alignItems se estiverem dentro do Text
        >
          {children}
        </Text>
      </View>
    </Button>
  );
};
