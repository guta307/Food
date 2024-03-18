import {
  Box,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  View,
} from "native-base";
import { HeightScreen, WidthScreen } from "../../utils/Screensize";
import UserIcon from "../../assets/Images/components/Icon/userIcon.png";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { Title } from "../../stories/Title/Title";
import { InputField } from "../../stories/Input/Input";
import BgImage from "../../assets/Images/pages/global/Group.png";
import { TextItem } from "../../stories/TextItem/TextItem";
import { Platform, Pressable } from "react-native";
import { useState } from "react";
import { ActionButton } from "../../stories/Button/action/ActionButton";
const Profile = ({ navigation }) => {
  const [edit, setEdit] = useState(false);
  const User = useSelector((state: RootState) => state.user);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, position: "relative" }}
    >
      <ScrollView flex={1} backgroundColor={"#FFF"}>
        <ActionButton
          zIndex={1}
          onTouchStart={() => navigation.goBack()}
          mt={HeightScreen * 0.07}
          position={"absolute"}
          left={"9%"}
        />
        <Image
          source={BgImage}
          alt="background image"
          position="absolute"
          width="100%"
          zIndex={-1} // Garante que a imagem fique atrás de qualquer conteúdo
        />
        <Box
          shadow={"7"}
          width={"full"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Image
            borderWidth={5}
            borderColor={"#FFF"}
            rounded={"full"}
            width={WidthScreen * 0.24}
            height={HeightScreen * 0.1109}
            marginTop={HeightScreen * 0.1404}
            marginBottom={HeightScreen * 0.016}
            source={UserIcon}
            alt="User picture"
          />
        </Box>
        <Title width={"full"} textAlign={"center"}>
          {User.userLogged.name}
        </Title>
        <Pressable
          onPress={() => {
            setEdit(!edit);
          }}
        >
          <TextItem
            marginBottom={HeightScreen * 0.12}
            color={"#9796A1"}
            fontWeight={"light"}
          >
            Edit Profile
          </TextItem>
        </Pressable>

        <InputField
          width={"90%"}
          marginLeft={WidthScreen * 0.048}
          marginBottom={HeightScreen * 0.07}
          label="Full name"
          disabled={edit ? false : true}
          defaultValue={User.userLogged.name}
        ></InputField>

        <InputField
          width={"90%"}
          marginLeft={WidthScreen * 0.048}
          label="email"
          disabled={edit ? false : true}
          defaultValue={User.userLogged.email}
        ></InputField>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Profile;
