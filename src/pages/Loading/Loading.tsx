import { Box, Center, Text } from "native-base";
import FoodHubIcon from "../../assets/Images/components/Icon/FoodHub.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
const Loading = () => {
  return (
    <Center flex={1} bg={"orange.900"}>
      <Box p="10" rounded="md">
        <FoodHubIcon />
      </Box>
    </Center>
  );
};

export default Loading;
