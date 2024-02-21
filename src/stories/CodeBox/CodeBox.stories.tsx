import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { CodeBox } from "./CodeBox";
import React from "react";
import ThemeDecorator from "../../../.storybook/decorator/ThemeDecorator";
import { IBoxProps } from "native-base";

const MyInputMeta: Meta<IBoxProps> = {
  title: "CodeBox",
  component: CodeBox,
  argTypes: {},

  args: {},
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

export const Basic: StoryObj<IBoxProps> = {};
