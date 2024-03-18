import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { FilterButton } from "./filter";

import React from "react";
import ThemeDecorator from "../../../../.storybook/decorator/ThemeDecorator";
import { IBoxProps } from "native-base";

const FilterButtonMeta: Meta<IBoxProps> = {
  title: "FilterButton",
  component: FilterButton,
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

export default FilterButtonMeta;

export const Basic: StoryObj<IBoxProps> = {};
