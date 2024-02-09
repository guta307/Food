import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { Title, TitleProps } from "./Title";
import React from "react";
import ThemeDecorator from "../../../.storybook/decorator/ThemeDecorator";
import { Heading } from "native-base";

const MyInputMeta: Meta<TitleProps> = {
  title: "Title",
  component: Title,
  argTypes: {
    size: {
      type: "string",
      control: "select",
      options: ["xl", "2xl", "3xl", "xxl", "2xxl"],
      defaultValue: "xl",
    },
    color: {
      type: "string",
      defaultValue: "#000",
    },
    children: {
      type: "string",
    },
  },

  args: {
    children: "teste",
    size: "3xl",
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

export default MyInputMeta;

export const Basic: StoryObj<TitleProps> = {};
