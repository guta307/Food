import { Box, FormControl, Input, IFormControlProps } from "native-base";
import React, { useEffect, useState } from "react";
import EyeOpen from "../../../src/assets/Images/components/Inputs/eyeOpen.svg";
import EyeClosed from "../../../src/assets/Images/components/Inputs/EyeClosed.svg";

import { HeightScreen, WidthScreen } from "../../utils/Screensize";
import { Pressable } from "react-native";
export type inputProps = {
  type?: "text" | "password";
  placeholder?: string;
  label?: string;
  onChange?: (text: string) => void;
  defaultValue?: string;
  disabled?: boolean;
  errorMessage?: string; // Adicionado
} & IFormControlProps;

export const InputField = ({
  type = "text",
  placeholder = "",
  label,
  width = WidthScreen * 0.8667,
  onChange = () => {},
  errorMessage,
  disabled = false,
  defaultValue = "",
  ...rest
}: inputProps) => {
  const [Show, setShow] = useState(false);
  const [InputType, setInputType] = useState(type);
  const [Error, setError] = useState(errorMessage);
  const passowordInteraction = () => {
    setInputType(() => {
      return !Show === false ? "password" : "text";
    });
    setShow(!Show);
  };

  useEffect(() => {
    setError(errorMessage);
  }, [errorMessage]);
  return (
    <>
      <FormControl
        {...rest}
        flexDir={"column"}
        width={width}
        isInvalid={!!errorMessage}
      >
        {label && (
          <FormControl.Label mb={HeightScreen * 0.0148}>
            {label}
          </FormControl.Label>
        )}

        <Input
          onChangeText={(value) => onChange(value)}
          onFocus={() => {
            Error && setError(null);
          }}
          defaultValue={defaultValue}
          shadow="2"
          isDisabled={disabled}
          width={"100%"}
          height={HeightScreen * 0.08}
          rounded={"10px"}
          fontFamily={"Sofiapro-Regular"}
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
            fontFamily: "Sofiapro-Bold",
            fontWeight: "bold",
          }}
          InputRightElement={
            type === "password" ? (
              <Box mr={2} h="full" justifyContent="center">
                {!Show ? (
                  <Pressable onTouchStart={passowordInteraction}>
                    <Box
                      width={WidthScreen * 0.09}
                      justifyContent={"center"}
                      alignItems={"center"}
                      h={"full"}
                    >
                      <EyeOpen
                        width={WidthScreen * 0.0453}
                        height={HeightScreen * 0.0148}
                      />
                    </Box>
                  </Pressable>
                ) : (
                  <Pressable onTouchStart={passowordInteraction}>
                    <Box
                      width={WidthScreen * 0.09}
                      justifyContent={"center"}
                      alignItems={"center"}
                      h={"full"}
                    >
                      <EyeClosed
                        width={WidthScreen * 0.0453}
                        height={HeightScreen * 0.0148}
                      />
                    </Box>
                  </Pressable>
                )}
              </Box>
            ) : (
              <></>
            ) // Use null or <></> (React Fragment) if nothing should be rendered when type is not "password"
          }
          fontSize={"17px"}
          type={InputType}
        />
        {Error && <FormControl.ErrorMessage>{Error}</FormControl.ErrorMessage>}
      </FormControl>
    </>
  );
};
