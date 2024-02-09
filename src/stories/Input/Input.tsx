import { Box, FormControl, Image, Input } from "native-base";
import React, { useState } from "react";
import EyeOpen from "../../../src/assets/Images/components/Inputs/eyeOpen.svg";
import EyeClosed from "../../../src/assets/Images/components/Inputs/EyeClosed.svg";

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
  const [Show, setShow] = useState(false);
  const [InputType, setInputType] = useState(type);

  const passowordInteraction = () => {
    setInputType(() => {
      return !Show === false ? "password" : "text";
    });
    setShow(!Show);
  };

  return (
    <>
      <FormControl mt={3} flexDir={"column"} width={"325px"}>
        {label && <FormControl.Label>{label}</FormControl.Label>}

        <Input
          shadow="2"
          width={"100%"}
          height={"65px"}
          rounded={"10px"}
          placeholder={placeholder}
          borderColor={"#EEE"}
          borderWidth={"1px"}
          bg={"white"}
          _hover={{
            backgroundColor: "white",
          }}
          _focus={{
            backgroundColor: "white",
            borderColor: "orange.900",
            borderWidth: "1px",
          }}
          InputRightElement={
            type === "password" ? (
              <Box mr={2} h="full" justifyContent="center">
                {!Show ? (
                  <EyeOpen
                    onTouchStart={passowordInteraction}
                    width="17"
                    height="12"
                  />
                ) : (
                  <EyeClosed
                    onTouchStart={passowordInteraction}
                    width="17"
                    height="12"
                  />
                )}
              </Box>
            ) : (
              <></>
            ) // Use null or <></> (React Fragment) if nothing should be rendered when type is not "password"
          }
          fontSize={"17px"}
          type={InputType}
        />
      </FormControl>
    </>
  );
};
