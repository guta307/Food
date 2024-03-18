import { Box, IBoxProps } from "native-base";
import { HeightScreen, WidthScreen } from "../../../../utils/Screensize";
import { TextItem } from "../../../TextItem/TextItem";

export type PriceTagProps = {
  value: number;
} & IBoxProps;

export const PriceTag = ({ value, ...rest }: PriceTagProps) => {
  return (
    <Box
      {...rest}
      w={WidthScreen * 0.192}
      h={HeightScreen * 0.0418}
      bg={"#FFF"}
      zIndex={1}
      rounded={"full"}
      alignItems={"center"}
      flexDir={"row"}
      justifyContent={"center"}
    >
      <TextItem
        fontSize={"lg"}
        fontFamily={"Sofiapro-Bold"}
        color={"orange.900"}
      >
        $
      </TextItem>
      <TextItem fontSize={"lg"} fontFamily={"Sofiapro-Bold"}>
        {value}
      </TextItem>
    </Box>
  );
};
