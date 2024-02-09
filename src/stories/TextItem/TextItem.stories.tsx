import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { TextItem, TextItemProps } from "./TextItem";
import React from "react";
import ThemeDecorator from "../../../.storybook/decorator/ThemeDecorator";

const MyInputMeta: Meta<TextItemProps> = {
  title: "TextItem",
  component: TextItem,
  argTypes: {
    size: {
      type: "string",
      control: "select",
      options: ["xs", "sm", "md", "lg"],
      defaultValue: "md",
    },
    color: {
      type: "string",
      defaultValue: "#000",
    },
    fontWeight: {
      type: "string",
      control: "select",
      options: [
        "normal",
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
      ],
      defaultValue: "normal",
    },

    children: {
      type: "string",
    },
  },

  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum dui eu convallis eleifend. Donec id nisl urna. Maecenas pellentesque mauris ac semper consequat",
    size: "md",
    fontWeight: "normal",
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

export default MyInputMeta;

export const Basic: StoryObj<TextItemProps> = {};
