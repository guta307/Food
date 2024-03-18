import { SafeAreaView } from "react-native-safe-area-context";

import { TextItem } from "../../stories/TextItem/TextItem";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { CartBox } from "../../stories/Dishes/CartBox/CartBox";
import { Box, ScrollView } from "native-base";
import { HeightScreen, WidthScreen } from "../../utils/Screensize";
import { Dish } from "../../interfaces";
import { Title } from "../../stories/Title/Title";
import { ActionButton } from "../../stories/Button/action/ActionButton";

export const Cart = ({ navigation }) => {
  const [CartItens, setCartItens] = useState([]);
  const [Value, setValue] = useState(0);
  interface CartItem extends Dish {
    amount: number;
  }
  const loadDishes = async (): Promise<CartItem[] | null> => {
    try {
      const jsonValue = await AsyncStorage.getItem("@dishes");
      let value = 0;
      JSON.parse(jsonValue).forEach((item: CartItem) => {
        value += parseFloat((item.amount * item.value).toFixed(2));
      });
      setValue(value);
      setCartItens(JSON.parse(jsonValue));
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      console.log(e);
      return null;
    }
  };

  const addItem = async (id: number): Promise<void> => {
    const existingDishesString = await AsyncStorage.getItem("@dishes");
    let existingDishes: CartItem[] = existingDishesString
      ? JSON.parse(existingDishesString)
      : [];
    const dishIndex = existingDishes.findIndex((dish) => dish.id === id);
    if (dishIndex > -1) {
      // Se o Dish já existe, atualize o amount
      existingDishes[dishIndex].amount += 1;
      await AsyncStorage.setItem("@dishes", JSON.stringify(existingDishes));
      loadDishes();
    }
  };

  const removeItem = async (id: number): Promise<void> => {
    const existingDishesString = await AsyncStorage.getItem("@dishes");
    let existingDishes: CartItem[] = existingDishesString
      ? JSON.parse(existingDishesString)
      : [];
    const dishIndex = existingDishes.findIndex((dish) => dish.id === id);
    if (dishIndex > -1 && existingDishes[dishIndex].amount > 1) {
      // Se o Dish já existe, atualize o amount

      existingDishes[dishIndex].amount -= 1;
      await AsyncStorage.setItem("@dishes", JSON.stringify(existingDishes));
      loadDishes();
    }
  };
  const removeDish = async (dishId: number) => {
    try {
      const existingDishesString = await AsyncStorage.getItem("@dishes");
      const existingDishes = existingDishesString
        ? JSON.parse(existingDishesString)
        : [];
      const updatedDishes = existingDishes.filter(
        (dish: Dish) => dish.id !== dishId
      );
      await AsyncStorage.setItem("@dishes", JSON.stringify(updatedDishes));
      loadDishes();
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    loadDishes();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        bg={"white"}
        flex={1}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <ActionButton
          onTouchStart={() => navigation.goBack()}
          mt={HeightScreen * 0.0455}
          position={"absolute"}
          left={"9%"}
        />
        <TextItem marginTop={HeightScreen * 0.058} size={"lg"}>
          Cart
        </TextItem>
        {CartItens.map((item) => {
          return (
            <CartBox
              marginTop={HeightScreen * 0.0283}
              marginBottom={HeightScreen * 0.0283}
              img={item.imageUri}
              ingredient={item.ingredients}
              dish={item.name}
              addFunction={() => {
                addItem(item.id);
              }}
              removeFunction={() => {
                removeItem(item.id);
              }}
              deleteFunction={() => {
                removeDish(item.id);
              }}
              value={parseFloat((item.amount * item.value).toFixed(2))}
              amount={item.amount}
            />
          );
        })}

        <Box
          flexDir={"row"}
          borderBottomWidth={1}
          borderBottomColor={"#F1F2F3"}
          w={WidthScreen * 0.8}
          justifyContent={"space-between"}
          paddingBottom={HeightScreen * 0.01}
        >
          <TextItem
            size={"md"}
            fontWeight={"bold"}
            fontFamily={"Sofiapro-Bold"}
          >
            Total
          </TextItem>
          <TextItem
            size={"lg"}
            fontWeight={"bold"}
            fontFamily={"Sofiapro-Bold"}
          >
            ${parseFloat(Value.toFixed(2))}
          </TextItem>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};
