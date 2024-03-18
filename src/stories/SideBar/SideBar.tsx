import { Box, FlatList, Image, ScrollView } from "native-base";
import Documents from "../../assets/Images/components/sidebar/Document.svg";
import HelpIcon from "../../assets/Images/components/sidebar/Helps.svg";
import LocationIcon from "../../assets/Images/components/sidebar/Location.svg";
import MessageIcon from "../../assets/Images/components/sidebar/Message.svg";
import SettingIcon from "../../assets/Images/components/sidebar/Setting.svg";
import ProfileIcon from "../../assets/Images/components/sidebar/Profile.svg";
import WalletIcon from "../../assets/Images/components/sidebar/Wallet.svg";
import { TextItem } from "../TextItem/TextItem";
import { HeightScreen, WidthScreen } from "../../utils/Screensize";
import UserIcon from "../../assets/Images/components/Icon/userIcon.png";
import LogOutIcon from "../../assets/Images/components/button/icons/LogOut.svg";
import { Title } from "../Title/Title";
import { MyButton } from "../Button/Standard/Button";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { Pressable } from "react-native";

export const SideBar = ({ navigation }) => {
  const NavigationControl = (section: string) => {
    switch (section) {
      case "My Profile":
        navigation.navigate("Profile");
        break;
      case "My Orders":
        navigation.navigate("Cart");
        break;
      default:
        break;
    }
  };
  const sections = [
    { name: "My Orders", src: <Documents />, id: 1 },
    {
      name: "My Profile",
      src: <ProfileIcon />,
      id: 2,
    },
    { name: "Delivery Adress", src: <LocationIcon />, id: 3 },
    { name: "Payment Methods", src: <WalletIcon />, id: 4 },
    { name: "Contact Us", src: <MessageIcon />, id: 5 },
    { name: "Settings", src: <SettingIcon />, id: 6 },
    { name: "Helps & FAQs", src: <HelpIcon />, id: 7 },
  ];
  const User = useSelector((state: RootState) => state.user);

  return (
    <ScrollView flex={1}>
      <Box w={WidthScreen * 0.7} h={"full"} bg={"#FFF"}>
        <Image
          rounded={"full"}
          width={WidthScreen * 0.24}
          height={HeightScreen * 0.1109}
          marginTop={HeightScreen * 0.0443}
          marginLeft={WidthScreen * 0.0453}
          marginBottom={HeightScreen * 0.0271}
          source={UserIcon}
          alt="User picture"
        />

        <Title
          marginLeft={WidthScreen * 0.0453}
          fontSize={"lg"}
          fontWeight={"semibold"}
        >
          {User.userLogged.name}
        </Title>
        <TextItem
          marginLeft={WidthScreen * 0.0453}
          marginBottom={HeightScreen * 0.0579}
          textAlign={"left"}
          color={"#9EA1B1"}
          fontSize={"sm"}
        >
          {User.userLogged.email}
        </TextItem>

        {sections.map((item, index) => (
          <Pressable
            onPress={() => {
              NavigationControl(item.name);
            }}
          >
            <Box
              marginLeft={WidthScreen * 0.0453}
              key={index}
              flexDir="row"
              alignItems="center"
              marginTop={index > 0 && HeightScreen * 0.0443}
            >
              {/* Certifique-se de que item.src é renderizado corretamente, talvez seja necessário um componente de imagem */}
              {item.src}
              <TextItem
                style={{ marginLeft: WidthScreen * 0.0373, fontSize: 16 }}
              >
                {item.name}
              </TextItem>
            </Box>
          </Pressable>
        ))}
        <MyButton
          type="action"
          marginTop={HeightScreen * 0.05}
          marginBottom={HeightScreen * 0.0394}
          marginLeft={WidthScreen * 0.0453}
          width={WidthScreen * 0.312}
          h={HeightScreen * 0.053}
          alignItems={"center"}
          Img={LogOutIcon}
          TextMargin={WidthScreen * 0.02}
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        >
          <TextItem color={"white"}>Log Out</TextItem>
        </MyButton>
      </Box>
    </ScrollView>
  );
};
