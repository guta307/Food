import { Box, CloseIcon, Image, IBoxProps } from "native-base";
import { HeightScreen, WidthScreen } from "../../../utils/Screensize";
import { Title } from "../../Title/Title";
import { TextItem } from "../../TextItem/TextItem";
import { AddRemove } from "../../Button/AddRemove/AddRemove";
import { Pressable } from "react-native";

export type CartBoxProps = {
  img: string;
  dish: string;
  ingredient: string;
  value: number;
  amount: number;
  addFunction: Function;
  removeFunction: Function;
  deleteFunction: Function;
} & IBoxProps;

export const CartBox = ({
  img,
  dish,
  ingredient,
  value,
  amount,
  addFunction,
  removeFunction,
  deleteFunction,
  ...rest
}: CartBoxProps) => {
  return (
    <Box {...rest} flexDir={"row"}>
      <Box
        alignItems={"center"}
        justifyContent={"center"}
        marginRight={WidthScreen * 0.0587}
      >
        <Image
          source={{
            uri: img,
          }}
          width={WidthScreen * 0.21}
          height={WidthScreen * 0.21}
          rounded={WidthScreen * 0.04}
          marginBottom={HeightScreen * 0.0148}
          alt={dish}
        />
      </Box>

      <Box>
        <TextItem
          w={WidthScreen * 0.33}
          textAlign={"left"}
          size={"md"}
          fontWeight={"bold"}
          fontFamily={"Sofiapro-Bold"}
        >
          {dish}
        </TextItem>

        <TextItem
          maxWidth={WidthScreen * 0.33}
          textAlign={"left"}
          size={"sm"}
          color={"#8C8A9D"}
          fontWeight={"light"}
        >
          {ingredient}
        </TextItem>

        <TextItem
          textAlign={"left"}
          color={"orange.900"}
          size={"md"}
          fontWeight={"semibold"}
        >
          ${value}
        </TextItem>
      </Box>

      <Box
        justifyContent={"space-between"}
        alignItems={"flex-end"}
        marginLeft={WidthScreen * 0.016}
      >
        <Pressable
          onPress={() => {
            deleteFunction();
          }}
        >
          <CloseIcon color={"orange.900"} />
        </Pressable>

        <Box flexDir={"row"} alignItems={"center"}>
          <AddRemove onPress={removeFunction} type="subtract" />
          <TextItem
            marginLeft={WidthScreen * 0.016}
            marginRight={WidthScreen * 0.016}
            size={"md"}
            fontWeight={"bold"}
            fontFamily={"Sofiapro-Bold"}
          >
            {amount}
          </TextItem>
          <AddRemove onPress={addFunction} type="add" />
        </Box>
      </Box>
    </Box>
  );
};
