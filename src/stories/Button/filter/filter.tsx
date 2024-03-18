import { Box, IBoxProps, Image } from "native-base";
import { HeightScreen, WidthScreen } from "../../../utils/Screensize";
import FilterIcon from "../../../assets/Images/components/Inputs/filter.png";

export const FilterButton = ({ ...rest }: IBoxProps) => {
  return (
    <Box
      w={WidthScreen * 0.136}
      h={HeightScreen * 0.0629}
      borderWidth={1}
      borderColor={"#EEE"}
      style={{ aspectRatio: 1 }}
      shadow={2}
      alignItems={"center"}
      rounded={WidthScreen * 0.04}
      bg={"white"}
      justifyContent={"center"}
      position={"relative"}
      {...rest}
    >
      <Image source={FilterIcon} width={"50%"} alt="filter button" />
    </Box>
  );
};
