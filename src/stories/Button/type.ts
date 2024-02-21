import { IButtonProps } from "native-base";
import { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  shadow?: "0" | "1" | "2" | "3" | "4" | "5" | null;
  type?: "standard" | "action" | "login";
  Img?: React.ElementType; // Definindo url como um SvgProps para lidar com SVG
  FontWeight?:
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | "normal";
} & IButtonProps;
