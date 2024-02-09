import { NativeBaseProvider, StatusBar } from "native-base";
import { Themes } from "./src/style/theme";
import { Routes } from "./src/routes";
import React from "react";
import ThemeDecorator from "./.storybook/decorator/ThemeDecorator";
export default function App() {
  return (
    <ThemeDecorator>
      <StatusBar backgroundColor={Themes.colors.orange[900]} />
      <Routes />
    </ThemeDecorator>
  );
}
