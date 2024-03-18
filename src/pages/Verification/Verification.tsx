import { Box, FormControl, ScrollView } from "native-base";
import { KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";

import { Title } from "../../stories/Title/Title";

import { WidthScreen, HeightScreen } from "../../utils/Screensize";
import { TextItem } from "../../stories/TextItem/TextItem";
import { CodeBox } from "../../stories/CodeBox/CodeBox";
import { useCallback, useEffect, useRef, useState } from "react";
import { validateUser } from "../../services/SignUp/validate";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import React from "react";
const Verification = ({ navigation }) => {
  const [codeValues, setCodeValues] = useState({
    box1: "",
    box2: "",
    box3: "",
    box4: "",
  });

  const boxRefs = {
    box1: useRef(null),
    box2: useRef(null),
    box3: useRef(null),
    box4: useRef(null),
  };

  const focusNextBox = useCallback((nextBoxId) => {
    boxRefs[nextBoxId]?.current?.focus();
  }, []);

  const [error, setError] = useState(null);
  const user = useSelector((state: RootState) => state.user.userLogged);
  const handleChange = (id: string, value: string) => {
    if (error) {
      setError(null);
    }
    setCodeValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async () => {
    const response = await validateUser({
      code: `${Object.values(codeValues).join("")}`,
    });

    if (response.status) {
      navigation.navigate("SignIn");
    } else {
      setError("invalid code");
    }
  };

  useEffect(() => {
    const allFilled = Object.values(codeValues).every(
      (value) => value.length === 1
    );
    if (allFilled) {
      handleSubmit();
    }
  }, [codeValues]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        flex={1}
        paddingLeft={WidthScreen * 0.0693}
        paddingRight={WidthScreen * 0.064}
        bg={"#FFFFFF"}
      >
        <Title
          fontSize={"3xl"}
          mt={HeightScreen * 0.2217}
          mb={HeightScreen * 0.0148}
        >
          Verification Code
        </Title>
        <Box
          width={"full"}
          alignItems={"flex-start"}
          mb={HeightScreen * 0.0381}
        >
          <TextItem
            color={"#9796A1"}
            size={"sm"}
            fontFamily={"Sofiapro-Regular"}
          >
            Please type the verification code sent to
          </TextItem>
          <TextItem
            color={"#9796A1"}
            size={"sm"}
            fontFamily={"Sofiapro-Regular"}
          >
            {user?.email}
          </TextItem>
        </Box>

        <FormControl mb={HeightScreen * 0.0381} isInvalid={error}>
          <Box
            flexDir={"row"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            {Object.entries(boxRefs).map(([id, ref], index, array) => {
              const nextBoxId = array[index + 1]?.[0];
              return (
                <CodeBox
                  key={id}
                  ref={ref}
                  id={id}
                  onChange={handleChange}
                  onFocusNextBox={focusNextBox}
                  nextFocusId={nextBoxId}
                />
              );
            })}
          </Box>
          {error && (
            <FormControl.ErrorMessage alignItems={"center"}>
              {error}
            </FormControl.ErrorMessage>
          )}
        </FormControl>

        <Box width={"full"} flexDir={"row"} justifyContent={"center"}>
          <TextItem color={"gray.700"} size={"sm"}>
            I don’t recevie a code!{" "}
          </TextItem>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <TextItem color={"orange.900"} size={"md"}>
              Please resend{" "}
            </TextItem>
          </TouchableOpacity>
        </Box>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Verification;
