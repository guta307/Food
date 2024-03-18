import { IInputProps, Input, SearchIcon } from "native-base";
import { HeightScreen, WidthScreen } from "../../../utils/Screensize";

export const SearchBar = ({ ...rest }: IInputProps) => {
  return (
    <Input
      {...rest}
      shadow="2"
      width={WidthScreen * 0.6827}
      height={HeightScreen * 0.0629}
      rounded={"10px"}
      placeholder={"Find for food or restaurant..."}
      borderColor={"#EFEFEF"}
      borderWidth={"1px"}
      bg={"#FCFCFD"}
      _hover={{
        backgroundColor: "white",
      }}
      _focus={{
        backgroundColor: "white",
        borderColor: "orange.900",
        borderWidth: "1px",
      }}
      InputLeftElement={
        <SearchIcon
          w={WidthScreen * 0.0373}
          marginLeft={WidthScreen * 0.048}
          marginRight={0}
        />
      }
      fontSize={"sm"}
      type={"text"}
    />
  );
};
