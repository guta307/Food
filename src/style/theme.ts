import { extendTheme } from "native-base";

import { HeightScreen, WidthScreen } from "../utils/Screensize";

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
      300: "#323643",
      400: "#67666D",
      500: "#4D5364",
      800: "#2A2F3D",
      900: "#1A1D26 ",
    },
    gray: {
      200: "#EBEBEB",
      500: "#C4C7D0",
      600: "#8C9099",
      700: "#5B5B5E",
      800: "#A8ACB9",
      900: "#9A9FAE",
    },
    blue: {
      900: "#30384F",
    },
    white: "#fff",
  },
  fontSizes: {
    xs: WidthScreen * 0.032, //12
    sm: WidthScreen * 0.04, //15
    md: WidthScreen * 0.0427, //16
    lg: WidthScreen * 0.048, //18
    xl: WidthScreen * 0.064, //24
    "2xl": WidthScreen * 0.08, //30
    "3xl": WidthScreen * 0.096, //36
    xxl: WidthScreen * 0.167, //40
    "2xxl": WidthScreen * 0.12, //45
  },
  fontWeights: {},
  shadows: {
    0: {
      shadowColor: "#7A81BE",
      shadowOffset: { width: 0, height: HeightScreen * 0.0123 },
      shadowOpacity: 0.16,
      shadowRadius: 40,
    },
    1: {
      shadowColor: "#D3D1D8",
      shadowOffset: {
        width: WidthScreen * 0.0496,
        height: HeightScreen * 0.0229,
      },
      shadowOpacity: 0.25,
      shadowRadius: 37.174,
    },
    2: {
      shadowColor: "#E9E9E9",
      shadowOffset: {
        width: WidthScreen * 0.04,
        height: HeightScreen * 0.0246,
      },
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
      shadowOffset: { width: 0, height: HeightScreen * 0.0222 },
      shadowOpacity: 0.25,
      shadowRadius: 40,
    },
    5: {
      shadowColor: "#D3D1D8",
      shadowOffset: {
        width: WidthScreen * 0.04,
        height: HeightScreen * 0.0246,
      },
      shadowOpacity: 0.25,
      shadowRadius: 30,
    },
  },
});
