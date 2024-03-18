import { Box, ScrollView } from "native-base";
import { KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";

import { Title } from "../../stories/Title/Title";

import { WidthScreen, HeightScreen } from "../../utils/Screensize";
import { InputField } from "../../stories/Input/Input";
import { MyButton } from "../../stories/Button/Standard/Button";
import { InlineText } from "../../stories/InlineText/InlineText";

import FacebookIcon from "../../assets/Images/components/Icon/Facebook.svg";
import GoogleIcon from "../../assets/Images/components/Icon/Google.svg";
import { TextItem } from "../../stories/TextItem/TextItem";
import { useState } from "react";
import { createUser } from "../../services/SignUp/create";
import { handleChange, handleError } from "../../utils/inputHandle";
import { useDispatch } from "react-redux";
import { Subscribe } from "../../Redux/reducers/user";
import React from "react";
const SignUp = ({ navigation }) => {
  const [formValues, setFormValues] = useState({
    email: "",
    passwordHash: "",
    name: "",
  });

  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();
  const submit = async () => {
    // Primeiro, limpa os erros existentes
    setErrors([]);

    // Então, verifica cada campo para garantir que estão preenchidos
    const requiredFields = ["name", "email", "passwordHash"];
    let isValid = true;

    requiredFields.forEach((field) => {
      if (!formValues[field].trim()) {
        handleError(
          field,
          `${field[0].toUpperCase() + field.slice(1)} is required`,
          setErrors
        ); // Capitaliza o nome do campo e adiciona a mensagem de erro
        isValid = false;
      }
    });

    if (isValid) {
      const response = await createUser(formValues);

      if (response.status) {
        dispatch(Subscribe({ email: formValues.email }));
        navigation.navigate("Verification");
      } else {
        switch (response.error) {
          case "email":
            handleError("email", "Esse email esta em uso", setErrors);
          default:
            handleError(
              "generic",
              "Houve um problema, por favor tente mais tarde",
              setErrors
            );
        }
      }
    }
  };

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
          mt={HeightScreen * 0.1207}
          mb={HeightScreen * 0.0382}
        >
          Sign Up
        </Title>

        <InputField
          onChange={(value) =>
            handleChange("name", value, setFormValues, setErrors)
          }
          label="name"
          mb={HeightScreen * 0.0357}
          errorMessage={errors.find((error) => error.type === "name")?.message}
        />

        <InputField
          onChange={(value) =>
            handleChange("email", value, setFormValues, setErrors)
          }
          label="E-mail"
          mb={HeightScreen * 0.0357}
          errorMessage={errors.find((error) => error.type === "email")?.message}
        />

        <InputField
          onChange={(value) =>
            handleChange("passwordHash", value, setFormValues, setErrors)
          }
          label="password"
          type="password"
          mb={HeightScreen * 0.0406}
          errorMessage={
            errors.find((error) => error.type === "passwordHash")?.message
          }
        />

        <Box w={"full"} alignItems={"center"} mb={HeightScreen * 0.0406}>
          <MyButton
            type="action"
            h={HeightScreen * 0.0738}
            width={WidthScreen * 0.6613}
            shadow={"4"}
            fontFamily={"Sofiapro-Bold"}
            FontWeight={"600"}
            onPress={submit}
          >
            {" "}
            SIGN UP
          </MyButton>
        </Box>

        <Box
          mb={HeightScreen * 0.0665}
          width={"full"}
          flexDir={"row"}
          justifyContent={"center"}
        >
          <TextItem color={"gray.700"} size={"sm"}>
            Already have an account?{" "}
          </TextItem>
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <TextItem color={"orange.900"} size={"md"}>
              Login{" "}
            </TextItem>
          </TouchableOpacity>
        </Box>

        <InlineText color="gray.700" mb={HeightScreen * 0.0293}>
          sign up with
        </InlineText>
        <Box
          mb={WidthScreen * 0.0693}
          width={"full"}
          flexDir={"row"}
          justifyContent={"space-between"}
        >
          <MyButton
            Img={FacebookIcon}
            h={HeightScreen * 0.0665}
            shadow={"1"}
            width={WidthScreen * 0.373}
            FontWeight={"600"}
          >
            FACEBOOK
          </MyButton>

          <MyButton
            Img={GoogleIcon}
            h={HeightScreen * 0.0665}
            shadow={"1"}
            width={WidthScreen * 0.373}
            FontWeight={"600"}
          >
            GOOGLE
          </MyButton>
        </Box>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
