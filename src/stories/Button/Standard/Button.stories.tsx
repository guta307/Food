import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { MyButton } from "./Button";
import { ButtonProps } from "../type";
import React from "react";
import ThemeDecorator from "../../../../.storybook/decorator/ThemeDecorator";

const MyButtonMeta: Meta<ButtonProps> = {
  title: "MyButton",
  component: MyButton,
  argTypes: {
    children: {
      control: "text",
      description: "Content inside the component",
    },
    shadow: {
      control: "select",
      options: ["0", "1", "2", "3", "4", "5"],
      defaultValue: "2",
      description: "Shadow intensity from 0 to 5",
    },
    width: {
      type: "number",
      control: "number",
      defaultValue: null,
      description: "Width of the component or null for auto width",
    },
    type: {
      control: "radio",
      options: ["standard", "action", "login"],
      defaultValue: "standard",
      description: "Type of the component",
    },
    fontWeight: {
      control: "select",
      options: [
        "bold",
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900",
        "normal",
      ],
      defaultValue: "400",
    },
  },

  args: {
    children: "Hello world",
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

export default MyButtonMeta;

export const Basic: StoryObj<ButtonProps> = {};
