import { Box, IBoxProps, Image } from "native-base";
import { HeightScreen, WidthScreen } from "../../../utils/Screensize";
import { TextItem } from "../../TextItem/TextItem";
import VerifiedIcon from "../../../assets/Images/components/restaurant/icons/verified.svg";
import DeliverIcon from "../../../assets/Images/components/restaurant/icons/deliver.svg";
import TimerIcon from "../../../assets/Images/components/restaurant/icons/timer.svg";
import { CategorieBox } from "../CategorieBox/CategorieBox";

export interface IRestaurantBoxProps extends IBoxProps {
  name: string;
  categories: string[];
  deliveryTime: string;
  deliveryCost: string;
  imageUri: string; // Adicionando a nova propriedade
}

// Usando a interface definida acima
export const Restaurant_Box = ({
  name,
  categories,
  deliveryTime,
  deliveryCost,
  imageUri, // Utilizando a nova propriedade
  ...rest
}: IRestaurantBoxProps) => {
  return (
    <Box
      borderWidth={0.2}
      rounded={WidthScreen * 0.04}
      width={WidthScreen * 0.793}
      height={HeightScreen * 0.2821}
      bg={"#FFF"}
      {...rest}
    >
      <Image
        source={{ uri: imageUri }} // Usando a propriedade imageUri aqui
        width={"full"}
        height={HeightScreen * 0.1675}
        roundedTopLeft={WidthScreen * 0.04}
        roundedTopRight={WidthScreen * 0.04}
        marginBottom={HeightScreen * 0.0148}
        alt="Restaurant Place"
      />

      <TextItem
        marginLeft={WidthScreen * 0.0347}
        marginBottom={HeightScreen * 0.0074}
        fontSize={"sm"}
        textAlign={"left"}
        alignItems={"center"}
      >
        {name} <VerifiedIcon />
      </TextItem>

      <Box
        flexDir={"row"}
        alignItems={"center"}
        marginLeft={WidthScreen * 0.0347}
      >
        <DeliverIcon />
        <TextItem
          marginLeft={WidthScreen * 0.01}
          marginRight={WidthScreen * 0.0453}
          fontSize={"xs"}
          fontFamily={"Helvetica Neue"}
          color={"#7E8392"}
        >
          {deliveryCost}
        </TextItem>
        <TimerIcon />
        <TextItem
          marginLeft={WidthScreen * 0.0027}
          marginRight={WidthScreen * 0.0453}
          fontSize={"xs"}
          color={"#7E8392"}
          fontFamily={"Helvetica Neue"}
        >
          {deliveryTime}
        </TextItem>
      </Box>

      <Box marginLeft={WidthScreen * 0.0347} flexDir={"row"}>
        {categories.map((category) => (
          <CategorieBox key={category}>{category}</CategorieBox>
        ))}
      </Box>
    </Box>
  );
};
