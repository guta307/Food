import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { HeaderBox, HeaderProps } from "./Header";
import React from "react";
import ThemeDecorator from "../../../.storybook/decorator/ThemeDecorator";

const HeaderBoxMeta: Meta<HeaderProps> = {
  title: "HeaderBox",
  component: HeaderBox,
  argTypes: {
    children: {
      type: "string",
      control: "text",
    },
  },

  args: {
    children: "teste",
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

export default HeaderBoxMeta;

export const Basic: StoryObj<HeaderProps> = {};
