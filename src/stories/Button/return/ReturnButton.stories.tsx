import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { ReturnButton } from "./ReturnButton";
import { IBoxProps } from "native-base";
import React from "react";
import ThemeDecorator from "../../../../.storybook/decorator/ThemeDecorator";

const ReturnButtonMeta: Meta<IBoxProps> = {
  title: "ReturnButton",
  component: ReturnButton,
  argTypes: {},

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

export default ReturnButtonMeta;

export const Basic: StoryObj<IBoxProps> = {};
