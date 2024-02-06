// ThemeDecorator.tsx
import React, { ReactNode } from "react";
import { NativeBaseProvider } from "native-base";
import { useFonts } from "expo-font";

import { Themes } from "../../src/style/theme";

type ThemeDecoratorProps = {
  children: ReactNode;
};

const ThemeDecorator: React.FC<ThemeDecoratorProps> = ({ children }) => {
  useFonts({
    "Sofiapro-Light": require("../../src/assets/fonts/sofiapro-light.otf"),
  });
  return <NativeBaseProvider theme={Themes}>{children}</NativeBaseProvider>;
};

export default ThemeDecorator;
