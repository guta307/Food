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
import { ReturnButton } from "../../stories/Button/return/ReturnButton";
import { useState } from "react";
import { handleChange, handleError } from "../../utils/inputHandle";
import { loginUser as loginService } from "../../services/Login/login";

import { useDispatch } from "react-redux";
import { logIn } from "../../Redux/reducers/user";

const SignIn = ({ navigation }) => {
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
    const requiredFields = ["email", "passwordHash"];
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
      const result = await loginService(formValues);

      if (result.status) {
        const user = result.response.data;
        dispatch(logIn({ name: user.name as string }));
        navigation.navigate("Loading");
      } else {
        console.log(result);
        switch (result.error.response.data.error) {
          case "Incorrect password":
            handleError("passwordHash", "Senha incorreta", setErrors);
            34;
            break;
          case "Account not verified":
            handleError("email", "Conta não verificada", setErrors);
            34;
            break;
          case "Email not found":
            handleError("email", "Conta nao encontrada", setErrors);
            34;
            break;
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
      style={{ flex: 1, position: "relative" }}
    >
      <ScrollView
        flex={1}
        paddingLeft={WidthScreen * 0.0693}
        paddingRight={WidthScreen * 0.064}
        bg={"#FFFFFF"}
      >
        <ReturnButton
          onTouchStart={() => navigation.goBack()}
          mt={HeightScreen * 0.0455}
        />

        <Title
          fontSize={"3xl"}
          mt={HeightScreen * 0.1294}
          mb={HeightScreen * 0.0382}
        >
          Sign In
        </Title>

        <InputField
          onChange={(value) =>
            handleChange("email", value, setFormValues, setErrors)
          }
          placeholder="Your email or phone"
          label="E-mail"
          mb={HeightScreen * 0.0357}
          errorMessage={errors.find((error) => error.type === "email")?.message}
        />

        <InputField
          onChange={(value) =>
            handleChange("passwordHash", value, setFormValues, setErrors)
          }
          label="Password"
          placeholder="Password"
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
            onTouchStart={submit}
          >
            {" "}
            LOGIN
          </MyButton>
        </Box>

        <Box
          mb={HeightScreen * 0.0665}
          width={"full"}
          flexDir={"row"}
          justifyContent={"center"}
        >
          <TextItem color={"gray.700"} size={"sm"}>
            Dont have an account?{" "}
          </TextItem>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <TextItem color={"orange.900"} size={"md"}>
              Sign Up{" "}
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

export default SignIn;
