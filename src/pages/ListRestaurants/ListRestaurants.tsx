import { Box, ChevronDownIcon, FlatList, ScrollView } from "native-base";
import { HeightScreen, WidthScreen } from "../../utils/Screensize";
import { Restaurant_Box } from "../../stories/Restaurants/Box/Box";
import { RootState } from "../../Redux/store";
import { useSelector } from "react-redux";
import { Pressable, SafeAreaView } from "react-native";
import { TextItem } from "../../stories/TextItem/TextItem";
import FilterImg from "../../assets/Images/components/Icon/filter.svg";
import { ActionButton } from "../../stories/Button/action/ActionButton";
const ListRestaurants = ({ navigation }) => {
  const restaurants = useSelector((state: RootState) => state.restaurants);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ActionButton
        marginLeft={"9%"}
        onTouchStart={() => navigation.goBack()}
      />
      <Box
        flexDir={"row"}
        justifyContent={"space-between"}
        marginTop={HeightScreen * 0.032}
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
        data={restaurants.restaurants}
        renderItem={({ item }) => (
          <Box w={WidthScreen} alignItems={"center"} justifyContent={"center"}>
            <Pressable
              onPress={() =>
                navigation.navigate("RestaurantPage", { item: item })
              }
            >
              <Restaurant_Box
                marginBottom={WidthScreen * 0.0373}
                name={item.name}
                categories={item.categories}
                deliveryTime={item.deliveryTime}
                deliveryCost={item.deliveryCost}
                imageUri={item.imageUri}
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

export default ListRestaurants;
