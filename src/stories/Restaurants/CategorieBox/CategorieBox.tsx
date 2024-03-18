import { Box, IBoxProps } from "native-base";
import { HeightScreen, WidthScreen } from "../../../utils/Screensize";
import { TextItem } from "../../TextItem/TextItem";

export const CategorieBox = ({ children, ...rest }: IBoxProps) => {
  return (
    <Box
      marginRight={WidthScreen * 0.00533}
      h={HeightScreen * 0.0271}
      padding={WidthScreen * 0.005}
      rounded={WidthScreen * 0.0133}
      bg={"#F6F6F6"}
      alignItems={"center"}
      justifyContent={"center"}
      {...rest}
    >
      <TextItem color={"#8A8E9B"} size={"xs"}>
        {children}
      </TextItem>
    </Box>
  );
};
