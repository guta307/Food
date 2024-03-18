import React from "react";
import { AddIcon, Box, IBoxProps, MinusIcon, Pressable } from "native-base";
import { WidthScreen } from "../../../utils/Screensize";

export type AddRemoveProps = {
  type: "add" | "subtract";
  onPress: Function;
} & IBoxProps;

export const AddRemove = ({ type, onPress, ...rest }: AddRemoveProps) => {
  return (
    <Pressable
      onPress={() => {
        onPress();
      }}
    >
      <Box
        {...rest}
        bg={type === "add" ? "orange.900" : "#FFF"}
        rounded={"full"}
        shadow={type === "add" ? "7" : 0}
        borderWidth={type === "add" ? 0 : 1}
        w={WidthScreen * 0.08}
        h={WidthScreen * 0.08}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {type === "add" ? (
          <AddIcon color="white" />
        ) : (
          <MinusIcon color="orange.900" />
        )}
      </Box>
    </Pressable>
  );
};
