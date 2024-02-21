import { NativeBaseProvider, StatusBar } from "native-base";
import { Themes } from "./src/style/theme";
import { Routes } from "./src/routes";
import { Provider } from "react-redux";
import store from "./src/Redux/store/index";
import React from "react";
import ThemeDecorator from "./.storybook/decorator/ThemeDecorator";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeDecorator>
        <StatusBar backgroundColor={Themes.colors.orange[900]} />
        <Routes />
      </ThemeDecorator>
    </Provider>
  );
}
