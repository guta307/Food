import React from "react";
import { Box, Button, Text } from "native-base";
import { ButtonStyle } from "./Button.style";

import { WidthScreen, HeightScreen } from "../../../utils/Screensize";

import { ButtonProps } from "../type";

export const MyButton = ({
  children,
  type = "standard",
  shadow = "5",
  width = 180,
  Img,
  FontWeight = "400",
  TextMargin,
  fontFamily,
  ...rest
}: ButtonProps) => {
  // Definindo a cor de fundo e a cor do texto com base no tipo
  const style = ButtonStyle(type);

  const isComponentType = typeof Img === "function";

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
      <Box
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {Img && isComponentType ? (
          // Ajusta as dimensões da imagem conforme necessário
          <Img width={WidthScreen * 0.0747} height={HeightScreen * 0.0345} />
        ) : (
          Img
        )}
        {/* Coloca o texto dentro de um componente Text */}
        <Text
          color={style.textColor}
          fontFamily={fontFamily}
          fontSize={"xs"}
          style={{ fontWeight: FontWeight, marginLeft: TextMargin }}
          paddingLeft={Img && type === "standard" ? "10%" : 0}
          // Remover justifyContent e alignItems se estiverem dentro do Text
        >
          {children}
        </Text>
      </Box>
    </Button>
  );
};
