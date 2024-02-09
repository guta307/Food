import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { InputField, inputProps } from "./Input";
import React from "react";
import ThemeDecorator from "../../../.storybook/decorator/ThemeDecorator";

const MyInputMeta: Meta<inputProps> = {
  title: "Input",
  component: InputField,
  argTypes: {
    type: {
      type: "string",
      control: "radio",
      options: ["text", "password"],
      defaultValue: "text",
    },
    label: {
      type: "string",
    },
    placeholder: {
      type: "string",
    },
  },

  args: {},
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

export const Basic: StoryObj<inputProps> = {};
