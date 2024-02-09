import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { InlineText, InlineTextProps } from "./InlineText";
import React from "react";
import ThemeDecorator from "../../../.storybook/decorator/ThemeDecorator";

const MyInputMeta: Meta<InlineTextProps> = {
  title: "InlineText",
  component: InlineText,
  argTypes: {
    size: {
      type: "string",
      control: "select",
      options: ["sm", "md"],
      defaultValue: "md",
    },
    color: {
      type: "string",
      defaultValue: "white",
    },
    children: {
      type: "string",
    },
  },

  args: {
    children: "Sign in with",
  },
  decorators: [
    (Story) => (
      <ThemeDecorator>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            backgroundColor: "red",
          }}
        >
          <Story />
        </View>
      </ThemeDecorator>
    ),
  ],
};

export default MyInputMeta;

export const Basic: StoryObj<InlineTextProps> = {};
