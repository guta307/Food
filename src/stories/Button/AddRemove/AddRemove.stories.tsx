import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { AddRemove, AddRemoveProps } from "./AddRemove";
import React from "react";
import ThemeDecorator from "../../../../.storybook/decorator/ThemeDecorator";

const AddRemoveMeta: Meta<AddRemoveProps> = {
  title: "AddRemove",
  component: AddRemove,
  argTypes: {
    type: {
      type: "string",
      control: "select",
      options: ["add", "substract"],
      defaultValue: "add",
    },
  },

  args: {
    type: "subtract",
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

export default AddRemoveMeta;

export const Basic: StoryObj<AddRemoveProps> = {};
