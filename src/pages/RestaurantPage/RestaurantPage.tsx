import { Box, ChevronDownIcon, FlatList, View } from "native-base";
import { RestaurantHeader } from "../../stories/Restaurants/RestaurantHeader/RestaurantHeader";
import { Pressable, SafeAreaView } from "react-native";
import { Title } from "../../stories/Title/Title";
import { HeightScreen, WidthScreen } from "../../utils/Screensize";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDishes } from "../../utils/getData/getData";
import { listDishes } from "../../Redux/reducers/dishes";
import { RootState } from "../../Redux/store";
import { DishCard } from "../../stories/Dishes/Box/DishCard";
import { TextItem } from "../../stories/TextItem/TextItem";
import FilterImg from "../../assets/Images/components/Icon/filter.svg";
import { ActionButton } from "../../stories/Button/action/ActionButton";

export const RestaurantPage = ({ route, navigation }) => {
  const { item } = route.params;

  const dishes = useSelector((state: RootState) => state.dishes);

  const dispatch = useDispatch();

  const pullData = async () => {
    try {
      const result = await getDishes(item.id);

      console.log(result);
      dispatch(listDishes({ dishes: result }));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    pullData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ActionButton
        zIndex={1}
        onTouchStart={() => navigation.goBack()}
        mt={HeightScreen * 0.07}
        position={"absolute"}
        left={"9%"}
      />
      <Box w={"full"} alignItems={"center"}>
        <RestaurantHeader
          backgroundImageUri={item.imageUri}
          iconImageUri={item.iconUri}
        />
      </Box>
      <Box alignItems={"center"}>
        <Title mt={WidthScreen * 0.199} mb={WidthScreen * 0.099}>
          {item.name}
        </Title>
      </Box>

      <Box
        flexDir={"row"}
        justifyContent={"space-between"}
        marginX={"auto"}
        marginBottom={HeightScreen * 0.032}
        width={WidthScreen * 0.793}
      >
        <Box flexDir={"row"}>
          <TextItem>Short By:</TextItem>

          <TextItem
            marginLeft={WidthScreen * 0.0267}
            fontWeight={"normal"}
            fontFamily={"Sofiapro-Regular"}
            fontSize={"sm"}
            color={"orange.900"}
          >
            Popular
          </TextItem>
          <ChevronDownIcon
            marginLeft={WidthScreen * 0.0133}
            color={"orange.900"}
            style={{ width: WidthScreen * 0.03 }}
          />
        </Box>
        <FilterImg />
      </Box>
      <FlatList
        w={"full"}
        flexWrap={"wrap"}
        data={dishes.dishes}
        renderItem={({ item }) => (
          <Box
            mb={WidthScreen * 0.04}
            w={WidthScreen}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Pressable
              onPress={() => navigation.navigate("DishPage", { item: item })}
            >
              <DishCard
                name={item.name}
                imageUri={item.imageUri}
                ingredients={item.ingredients}
                value={item.value}
              />
            </Pressable>
          </Box>
        )}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        removeClippedSubviews={true}
        nestedScrollEnabled={true} // Adicione esta linha
      />
    </SafeAreaView>
  );
};
