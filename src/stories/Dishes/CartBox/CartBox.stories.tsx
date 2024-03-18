import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { CartBox, CartBoxProps } from "./CartBox";
import React from "react";
import ThemeDecorator from "../../../../.storybook/decorator/ThemeDecorator";

const CartBoxMeta: Meta<CartBoxProps> = {
  title: "CartBox",
  component: CartBox,
  argTypes: {
    img: {
      type: "string",
    },
    dish: {
      type: "string",
    },
    ingredient: {
      type: "string",
    },
    value: {
      type: "number",
    },
    amount: {
      type: "number",
    },
  },

  args: {
    img: "https://www.yummytummyaarthi.com/wp-content/uploads/2021/12/1.jpg",
    dish: "Red n hot pizza",
    ingredient: "Spicy chicken, beef",
    value: 12,
    amount: 1,
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

export default CartBoxMeta;

export const Basic: StoryObj<CartBoxProps> = {};
