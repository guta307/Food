import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { CategorieBox } from "./CategorieBox";
import React from "react";
import ThemeDecorator from "../../../../.storybook/decorator/ThemeDecorator";
import { IBoxProps } from "native-base";

const CategorieBoxMeta: Meta<IBoxProps> = {
  title: "CategorieBox",
  component: CategorieBox,
  argTypes: {},

  args: {
    children: "Burger",
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

export default CategorieBoxMeta;

export const Basic: StoryObj<IBoxProps> = {};
