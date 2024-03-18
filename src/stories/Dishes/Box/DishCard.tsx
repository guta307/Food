import { Box, Card, ICardProps, Image } from "native-base";
import { HeightScreen, WidthScreen } from "../../../utils/Screensize";
import { TextItem } from "../../TextItem/TextItem";
import { PriceTag } from "./priceTag/PriceTag";

export interface DishCardProps extends ICardProps {
  name: string;
  ingredients: string;
  value: number;
  imageUri: string;
}

export const DishCard = ({
  name,
  ingredients,
  value,
  imageUri,
}: DishCardProps) => {
  return (
    <Card
      width={WidthScreen * 0.86133}
      padding={0}
      h={HeightScreen * 0.3}
      bg={"#FFF"}
      shadow={3}
      rounded={WidthScreen * 0.04}
    >
      <PriceTag
        position={"absolute"}
        left={WidthScreen * 0.016}
        top={WidthScreen * 0.0347}
        w={WidthScreen * 0.192}
        h={HeightScreen * 0.0418}
        value={value}
      />
      <Image
        source={{
          uri: imageUri,
        }} // Usando a propriedade imageUri aqui
        width={"full"}
        height={HeightScreen * 0.2}
        rounded={WidthScreen * 0.04}
        marginBottom={HeightScreen * 0.0148}
        alt="Restaurant Place"
      />

      <Box
        flexDir={"row"}
        alignItems={"center"}
        marginLeft={WidthScreen * 0.0347}
        w={"full"}
      >
        <TextItem
          fontSize={"lg"}
          fontFamily={"Sofiapro-Bold"}
          textAlign={"left"}
          alignItems={"center"}
        >
          {name}
        </TextItem>
      </Box>
      <Box
        flexDir={"row"}
        alignItems={"center"}
        marginLeft={WidthScreen * 0.0347}
        w={"full"}
      >
        <TextItem
          fontSize={"sm"}
          fontFamily={"Helvetica Neue"}
          color={"#7E8392"}
        >
          {ingredients}
        </TextItem>
      </Box>
    </Card>
  );
};
