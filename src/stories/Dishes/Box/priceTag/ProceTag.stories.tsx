import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { PriceTag, PriceTagProps } from "./PriceTag";
import React from "react";
import ThemeDecorator from "../../../../../.storybook/decorator/ThemeDecorator";
import { Box } from "native-base";

const PriceCardMeta: Meta<PriceTagProps> = {
  title: "PriceCard",
  component: PriceTag,
  argTypes: {
    value: {
      type: "number",
    },
  },

  args: { value: 10.35 },
  decorators: [
    (Story) => (
      <ThemeDecorator>
        <View
          style={{
            flex: 1,
          }}
        >
          <Box
            bg={"red.100"}
            alignItems="center"
            w={"full"}
            justifyContent="center"
            flex={1}
          >
            <Story />
          </Box>
        </View>
      </ThemeDecorator>
    ),
  ],
};

export default PriceCardMeta;

export const Basic: StoryObj<PriceTagProps> = {};
