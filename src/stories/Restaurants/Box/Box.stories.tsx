import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { IRestaurantBoxProps, Restaurant_Box } from "./Box";
import React from "react";
import ThemeDecorator from "../../../../.storybook/decorator/ThemeDecorator";

import FoodIcon from "../../../assets/Images/components/button/categories/pizza.gif";

const Restaurant_BoxMeta: Meta<IRestaurantBoxProps> = {
  title: "Restaurant_Box",
  component: Restaurant_Box,
  argTypes: {
    name: {
      type: "string",
    },
    deliveryTime: {
      type: "string",
    },
    deliveryCost: {
      type: "string",
    },
  },

  args: {
    name: "McDonald’s",
    categories: ["BURGER", "CHICKEN", "FAST FOOD"],
    deliveryTime: "10-15 mins",
    deliveryCost: "Free delivery",
    imageUri:
      "https://blog.goomer.com.br/wp-content/uploads/2020/11/goomer-pratos-do-dia-cardapio-restaurante-como-montar-780x450.jpg",
  },
  decorators: [
    (Story) => (
      <ThemeDecorator>
        <View
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
        >
          <Story />
        </View>
      </ThemeDecorator>
    ),
  ],
};

export default Restaurant_BoxMeta;

export const Basic: StoryObj<IRestaurantBoxProps> = {};
