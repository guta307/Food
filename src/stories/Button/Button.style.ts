import { ButtonProps } from "./Button";

export const ButtonStyle = (type: string) => {
  switch (type) {
    case "standard":
      return {
        textColor: "black.100",
        bgColor: "white",
        borderWidth: "0",
        borderColor: "white",
      };
      break;
    case "login":
      return {
        textColor: "white",
        bgColor: "rgba(255, 255, 255, 0.21)",
        borderWidth: "1px",
        borderColor: "white",
      };
      break;
    default:
      return {
        textColor: "white",
        bgColor: "orange.900",
        borderWidth: "0",
        borderColor: "white",
      };
  }
};
