import { Box, Button, IButtonProps, Image, Text, View } from "native-base";
import { HeightScreen, WidthScreen } from "../../../utils/Screensize";
import { TextItem } from "../../TextItem/TextItem";
import { useState } from "react";
import { ImageSourcePropType } from "react-native";
// Extende IButtonProps para incluir uma nova propriedade `imagePath`
export interface ICategorieButtonProps extends IButtonProps {
  imageSource: ImageSourcePropType; // Define o tipo da nova propriedade como string
  name: string;
}

export const CategorieButton = ({
  imageSource,
  name,
  ...rest
}: ICategorieButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const textColor = isPressed ? "white" : "black.400";

  return (
    <Button
      {...rest}
      width={WidthScreen * 0.156}
      height={HeightScreen * 0.1207}
      rounded={WidthScreen * 0.2667}
      bgColor={"#FFF"}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      padding={0}
      _pressed={{
        backgroundColor: "orange.900",
      }}
      style={{
        shadowColor: "#FE724C",
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.25,
        shadowRadius: 30,
        elevation: 20, // Para Android}
      }}
      alignItems={"center"}
    >
      <Box
        marginBottom={HeightScreen * 0.0135}
        rounded={"full"}
        bg={"white"}
        alignItems={"center"}
        width={WidthScreen * 0.132}
        height={WidthScreen * 0.132}
      >
        <Image
          source={imageSource} // Utiliza a propriedade imagePath para carregar a imagem
          alt="categorie image"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>

      <TextItem color={textColor} fontFamily={"Sofiapro-Regular"} size={"xs"}>
        {name}
      </TextItem>
    </Button>
  );
};
