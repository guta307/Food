import { Box, Image } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeightScreen, WidthScreen } from "../../utils/Screensize";
import { TextItem } from "../../stories/TextItem/TextItem";
import { Title } from "../../stories/Title/Title";
import { AddRemove } from "../../stories/Button/AddRemove/AddRemove";
import { MyButton } from "../../stories/Button/Standard/Button";
import BagIcon from "../../assets/Images/components/button/icons/Bag.svg";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActionButton } from "../../stories/Button/action/ActionButton";

export const DishPage = ({ route, navigation }) => {
  const [Amount, setAmount] = useState(1);

  const addDish = async (newDish) => {
    try {
      const existingDishesString = await AsyncStorage.getItem("@dishes");
      let existingDishes = existingDishesString
        ? JSON.parse(existingDishesString)
        : [];
      const dishIndex = existingDishes.findIndex(
        (dish) => dish.id === newDish.id
      );

      if (dishIndex > -1) {
        // Se o Dish já existe, atualize o amount
        existingDishes[dishIndex].amount += newDish.amount;
      } else {
        // Se não existe, adicione o novo Dish ao array
        existingDishes.push(newDish);
      }

      await AsyncStorage.setItem("@dishes", JSON.stringify(existingDishes));
      navigation.navigate("Cart");
    } catch (e) {
      console.log(e);
    }
  };

  const { item } = route.params;
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "space-between" }}
    >
      <ActionButton
        zIndex={1}
        onTouchStart={() => navigation.goBack()}
        mt={HeightScreen * 0.07}
        position={"absolute"}
        left={"9%"}
      />
      <Box>
        <Image
          source={{
            uri: item.imageUri,
          }}
          width={WidthScreen * 0.86}
          alt="dish image"
          height={HeightScreen * 0.25}
          rounded={WidthScreen * 0.04}
        />

        <Title width={WidthScreen * 0.86} textAlign={"left"} size={"2xl"}>
          {item.name}
        </Title>

        <Box
          width={WidthScreen * 0.86}
          justifyContent={"space-between"}
          flexDir={"row"}
        >
          <Box flexDir={"row"} alignItems={"center"}>
            <Title color={"orange.900"} fontSize={"xl"}>
              $
            </Title>
            <Title color={"orange.900"} fontSize={"3xl"}>
              {item.value}
            </Title>
          </Box>

          <Box flexDir={"row"} alignItems={"center"}>
            <AddRemove
              onPress={() => {
                Amount > 0 && setAmount(Amount - 1);
              }}
              type="subtract"
            />
            <TextItem
              marginLeft={WidthScreen * 0.016}
              marginRight={WidthScreen * 0.016}
              size={"md"}
              fontWeight={"bold"}
              fontFamily={"Sofiapro-Bold"}
            >
              {Amount}
            </TextItem>
            <AddRemove
              onPress={() => {
                Amount >= 0 && setAmount(Amount + 1);
              }}
              type="add"
            />
          </Box>
        </Box>

        <TextItem
          width={WidthScreen * 0.86}
          textAlign={"left"}
          color={"#858992"}
        >
          Brown the beef better. Lean ground beef – I like to use 85% lean
          angus. Garlic – use fresh chopped. Spices – chili powder, cumin, onion
          powder.
        </TextItem>
      </Box>

      <MyButton
        type="action"
        width={WidthScreen * 0.45}
        h={HeightScreen * 0.0653}
        justifyContent={"flex-start"}
        onPress={() => {
          addDish({ ...item, amount: Amount });
        }}
        alignItems={"center"}
        Img={
          <Box
            alignItems={"center"}
            justifyContent={"center"}
            w={WidthScreen * 0.08}
            h={WidthScreen * 0.08}
            background={"white"}
            rounded={"full"}
          >
            <BagIcon width={"50%"} />
          </Box>
        }
        TextMargin={WidthScreen * 0.02}
      >
        <TextItem alignItems={"center"} fontSize={"sm"} color={"white"}>
          ADD TO CART
        </TextItem>
      </MyButton>
    </SafeAreaView>
  );
};
