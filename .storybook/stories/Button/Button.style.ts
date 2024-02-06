import { ButtonProps } from "./Button";

export const ButtonStyle = (type: string) => {
  if (type === "standard") {
    return { textColor: "black.100", bgColor: "white" };
  }

  return { textColor: "white", bgColor: "orange.900" };
};
