import { Box, IBoxProps, ChevronLeftIcon } from "native-base";
import { WidthScreen } from "../../../utils/Screensize";

export const ReturnButton = ({ ...rest }: IBoxProps) => {
  return (
    <Box
      w={WidthScreen * 0.113}
      borderWidth={1}
      borderColor={"#EEE"}
      style={{ aspectRatio: 1 }}
      shadow={2}
      alignItems={"center"}
      rounded={WidthScreen * 0.0267}
      bg={"white"}
      justifyContent={"center"}
      {...rest}
    >
      <ChevronLeftIcon w={"50%"} />
    </Box>
  );
};
