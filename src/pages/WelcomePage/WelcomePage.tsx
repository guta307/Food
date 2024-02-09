import { ImageBackground, TouchableOpacity, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

import bgImage from "../../../src/assets/Images/pages/welcome/bg.png";
import { Title } from "../../stories/Title/Title";
import { TextItem } from "../../stories/TextItem/TextItem";
import { InlineText } from "../../stories/InlineText/InlineText";
import { MyButton } from "../../stories/Button/Button";

import FacebookIcon from "../../assets/Images/components/Icon/Facebook.svg";
import GoogleIcon from "../../assets/Images/components/Icon/Google.svg";

import { HeightScreen, WidthScreen } from "../../utils/Screensize";

import { Box, VStack } from "native-base";
export default function App() {
  return (
    <ImageBackground source={bgImage} style={{ flex: 1 }}>
      <LinearGradient
        colors={["#494D6300", "#191B2F"]}
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          zIndex: 0,
          paddingLeft: WidthScreen * 0.075,
          paddingRight: WidthScreen * 0.075,
        }}
      >
        <Box pt={HeightScreen * 0.19} flexDir="column">
          <VStack>
            <Title mb={-2} mt={-2} size="2xxl">
              Welcome to
            </Title>
            <Title mb={-2} mt={-2} size="2xxl" color="orange.900">
              FoodHub
            </Title>
            <TextItem color={"blue.900"} textAlign="left" size="lg">
              Your favourite foods delivered
            </TextItem>
            <TextItem color={"blue.900"} textAlign="left" size="lg">
              fast at your door.
            </TextItem>
          </VStack>
        </Box>
        <Box
          mt={HeightScreen * 0.262}
          width={"full"}
          alignItems={"center"}
          flexDir={"column"}
        >
          <InlineText>sign in with</InlineText>
          <Box width={"full"} flexDir={"row"} justifyContent={"space-between"}>
            <MyButton
              Img={FacebookIcon}
              h={HeightScreen * 0.0665}
              shadow={"5"}
              width={WidthScreen * 0.373}
              FontWeight={"600"}
            >
              FACEBOOK
            </MyButton>
            <MyButton
              Img={GoogleIcon}
              h={HeightScreen * 0.0665}
              shadow={"5"}
              width={WidthScreen * 0.373}
              FontWeight={"600"}
            >
              GOOGLE
            </MyButton>
          </Box>
          <Box
            width={"full"}
            mt={HeightScreen * 0.027}
            flexDir={"row"}
            fontFamily={"Sofiapro-Bold"}
            justifyContent={"center"}
          >
            <MyButton
              type="login"
              h={HeightScreen * 0.0665}
              width={"full"}
              shadow={null}
              fontFamily={"Sofiapro-Bold"}
              FontWeight={"500"}
            >
              Start with email or phone
            </MyButton>
          </Box>
          <Box
            width={"full"}
            mt={HeightScreen * 0.027}
            flexDir={"row"}
            fontFamily={"Sofiapro-Bold"}
            justifyContent={"center"}
          >
            <TextItem color={"white"} size={"md"}>
              Already have an account?{" "}
            </TextItem>
            <TouchableOpacity>
              <TextItem
                underline
                textDecoration={"undeline"}
                color={"white"}
                size={"md"}
              >
                Sign in{" "}
              </TextItem>
            </TouchableOpacity>
          </Box>
        </Box>
      </LinearGradient>
    </ImageBackground>
  );
}
