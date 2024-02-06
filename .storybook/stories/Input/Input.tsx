import { FormControl, Input, Text } from "native-base";
import React from "react";

export type inputProps = {
  type?: "text" | "password";
  placeholder?: string;
  label?: string;
};
export const InputField = ({
  type = "text",
  placeholder = "",
  label,
}: inputProps) => {
  return (
    <>
      <FormControl mt={3} flexDir={"column"} width={"325px"}>
        {label && <FormControl.Label>E-mail</FormControl.Label>}

        <Input
          shadow="2"
          width={"100%"}
          height={"65px"}
          rounded={"10px"}
          placeholder={placeholder}
          borderColor={"#EEE"}
          borderWidth={"1px"}
          bg={"white"}
          _hover={{ backgroundColor: "white" }}
          _focus={{ backgroundColor: "white" }}
          fontSize={"17px"}
          type={type}
        />
      </FormControl>
    </>
  );
};
