import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { DishCard, DishCardProps } from "./DishCard";
import React from "react";
import ThemeDecorator from "../../../../.storybook/decorator/ThemeDecorator";
import { IBoxProps } from "native-base";

const DishCardMeta: Meta<DishCardProps> = {
  title: "DishCard",
  component: DishCard,
  argTypes: {
    name: {
      type: "string",
    },
    imageUri: {
      type: "string",
    },
    ingredients: {
      type: "string",
    },
    value: {
      type: "number",
    },
  },

  args: {
    name: "Chicken Hawaiian",
    imageUri:
      "https://static.toiimg.com/thumb/msid-101282760,width-1280,height-720,resizemode-4/101282760.jpg",
    ingredients: "Chicken, Cheese and pineapple",
    value: 10.35,
  },
  decorators: [
    (Story) => (
      <ThemeDecorator>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Story />
        </View>
      </ThemeDecorator>
    ),
  ],
};

export default DishCardMeta;

export const Basic: StoryObj<DishCardProps> = {};
