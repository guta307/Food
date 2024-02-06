import { extendTheme } from "native-base";

export const Themes = extendTheme({
  colors: {
    orange: {
      200: "#FED2C7",
      500: "#FEA58D",
      800: "#FEA58D",
      900: "#FE724C",
    },
    yellow: {
      200: "#FFEFC3",
      500: "#FFDF8B",
      800: "#FFD050",
      900: "#FFC529",
    },
    black: {
      100: "#000",
      200: "#6E7489",
      500: "#4D5364",
      800: "#2A2F3D",
      900: "#1A1D26 ",
    },
    gray: {
      200: "#EBEBEB",
      500: "#C4C7D0",
      800: "#A8ACB9",
      900: "#9A9FAE",
    },
    white: "#fff",
  },
  fontSizes: {
    xs: 12,
    sm: 15,
    md: 16,
    lg: 18,
    xl: 24,
    "2xl": 30,
    "3xl": 36,
  },
  shadows: {
    0: {
      shadowColor: "#7A81BE",
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.16,
      shadowRadius: 40,
    },
    1: {
      shadowColor: "#D3D1D8",
      shadowOffset: { width: 18.587, height: 18.587 },
      shadowOpacity: 0.25,
      shadowRadius: 37.174,
    },
    2: {
      shadowColor: "#E9E9E9",
      shadowOffset: { width: 15, height: 20 },
      shadowOpacity: 0.25,
      shadowRadius: 45,
    },
    3: {
      shadowColor: "#FE724C",
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.25,
      shadowRadius: 30,
    },
    4: {
      shadowColor: "#D3D1D8",
      shadowOffset: { width: 0, height: 18 },
      shadowOpacity: 0.25,
      shadowRadius: 40,
    },
    5: {
      shadowColor: "#D3D1D8",
      shadowOffset: { width: 15, height: 15 },
      shadowOpacity: 0.25,
      shadowRadius: 30,
    },
  },
});
