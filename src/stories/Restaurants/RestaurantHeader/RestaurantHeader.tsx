import React from "react";
import { Box, Image, View } from "native-base";
import { HeightScreen, WidthScreen } from "../../../utils/Screensize";
import VerifiedIcon from "../../../assets/Images/components/restaurant/icons/verified.svg";

// Definição da interface de props
export interface RestaurantHeaderProps {
  backgroundImageUri: string;
  iconImageUri: string;
}

// Modificação do componente para aceitar props
export const RestaurantHeader: React.FC<RestaurantHeaderProps> = ({
  backgroundImageUri,
  iconImageUri,
}) => {
  return (
    <Box position={"relative"}>
      <Image
        rounded={WidthScreen * 0.04}
        w={WidthScreen * 0.86}
        h={HeightScreen * 0.18}
        source={{ uri: backgroundImageUri }} // Utilizando a prop para a imagem de fundo
        alt="Background image"
      />

      <Box
        w={WidthScreen * 0.86}
        h={WidthScreen * 0.28}
        position="absolute"
        top={HeightScreen * 0.12}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          w={WidthScreen * 0.86}
          mt={HeightScreen * 0.12}
          style={{
            position: "absolute",
            left: 0,
          }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box>
            <Image
              rounded={"full"}
              borderWidth={10}
              borderColor={"#FFF"}
              width={WidthScreen * 0.28}
              height={WidthScreen * 0.28}
              resizeMode="contain"
              source={{ uri: iconImageUri }} // Utilizando a prop para a imagem do ícone
              alt="Icon image"
            />
            <VerifiedIcon
              width={WidthScreen * 0.05}
              height={WidthScreen * 0.05}
              style={{
                position: "absolute",
                top: WidthScreen * 0.2,
                left: WidthScreen * 0.21,
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
