import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { SideBar } from "./SideBar";
import React from "react";
import ThemeDecorator from "../../../.storybook/decorator/ThemeDecorator";
import { IBoxProps, ScrollView } from "native-base";

const SideBarMeta: Meta<IBoxProps> = {
  title: "SideBar",
  component: SideBar,
  argTypes: {},

  args: {
    children: "Burger",
  },
  decorators: [
    (Story) => (
      <ThemeDecorator>
        <ScrollView
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Story />
        </ScrollView>
      </ThemeDecorator>
    ),
  ],
};

export default SideBarMeta;

export const Basic: StoryObj<IBoxProps> = {};
