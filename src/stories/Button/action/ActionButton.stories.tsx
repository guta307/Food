import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { ActionButton, ActionButtonProps } from "./ActionButton";

import React from "react";
import ThemeDecorator from "../../../../.storybook/decorator/ThemeDecorator";

const ActionButtonMeta: Meta<ActionButtonProps> = {
  title: "ActionButton",
  component: ActionButton,
  argTypes: {
    iconType: {
      type: "string",
      control: "select",
      options: ["return", "menu"],
      defaultValue: "return",
    },
  },

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

export default ActionButtonMeta;

export const Basic: StoryObj<ActionButtonProps> = {};
