import { Box, Center, Text } from "native-base";
import FoodHubIcon from "../../assets/Images/components/Icon/FoodHub.svg";
import React, { useEffect } from "react";
import { getData } from "../../utils/getData/getData";
import { useDispatch } from "react-redux";
import { list } from "../../Redux/reducers/restaurants";

const Loading = ({ navigation }) => {
  const dispatch = useDispatch();

  const pullData = async () => {
    try {
      const result = await getData();

      dispatch(list({ restaurants: result }));

      navigation.navigate("Menu");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    pullData();
  }, []);
  return (
    <Center flex={1} bg={"orange.900"}>
      <Box p="10" rounded="md">
        <FoodHubIcon />
      </Box>
    </Center>
  );
};

export default Loading;
