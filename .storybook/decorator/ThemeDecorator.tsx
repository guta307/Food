import React, { ReactNode } from "react";
import { NativeBaseProvider, Box } from "native-base";
import { useFonts } from "expo-font";
import { ActivityIndicator, View, StyleSheet } from "react-native";

import { Themes } from "../../src/style/theme";

type ThemeDecoratorProps = {
  children: ReactNode;
};

const ThemeDecorator: React.FC<ThemeDecoratorProps> = ({ children }) => {
  let [fontsLoaded] = useFonts({
    "Sofiapro-Bold": require("../../src/assets/fonts/Sofiapro-bold.ttf"),
    "Sofiapro-Regular": require("../../src/assets/fonts/Sofiapro-regular.ttf"),
    "Sofiapro-Light": require("../../src/assets/fonts/sofiapro-light.otf"),
  });

  if (!fontsLoaded) {
    // Utiliza ActivityIndicator do React Native que não depende do NativeBase
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <NativeBaseProvider theme={Themes}>{children}</NativeBaseProvider>;
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ThemeDecorator;
