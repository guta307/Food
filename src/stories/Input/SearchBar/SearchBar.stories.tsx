import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { SearchBar } from "./SearchBar";
import React from "react";
import ThemeDecorator from "../../../../.storybook/decorator/ThemeDecorator";
import { IInputProps } from "native-base";

const MySearchBarMeta: Meta<IInputProps> = {
  title: "SearchBar",
  component: SearchBar,
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

export default MySearchBarMeta;

export const Basic: StoryObj<IInputProps> = {};
