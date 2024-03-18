import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { CategorieButton } from "./categorie";
import React from "react";
import ThemeDecorator from "../../../../.storybook/decorator/ThemeDecorator";
import { ICategorieButtonProps } from "./categorie";
import FoodIcon from "../../../assets/Images/components/button/categories/pizza.gif";
const categorieButtonMeta: Meta<ICategorieButtonProps> = {
  title: "categorieButton",
  component: CategorieButton,
  argTypes: {
    imageSource: {
      type: "string",
      description: "Image source object for the category button",
    },
    name: {
      type: "string",
      description: "categorie name",
    },
  },

  args: {
    imageSource: FoodIcon,
    name: "pizza",
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

export default categorieButtonMeta;

export const Basic: StoryObj<ICategorieButtonProps> = {};
