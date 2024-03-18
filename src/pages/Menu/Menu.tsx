import {
  Box,
  ChevronDownIcon,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "native-base";
import { HeaderBox } from "../../stories/Header/Header";
import { ActionButton } from "../../stories/Button/action/ActionButton";
import React, { useRef, useState } from "react";
import UserIcon from "../../assets/Images/components/Icon/userIcon.png";
import { HeightScreen, WidthScreen } from "../../utils/Screensize";
import { Title } from "../../stories/Title/Title";
import { SearchBar } from "../../stories/Input/SearchBar/SearchBar";
import { FilterButton } from "../../stories/Button/filter/filter";
import { categories } from "./CategorieList";
import { CategorieButton } from "../../stories/Button/categorie/categorie";
import { TextItem } from "../../stories/TextItem/TextItem";
import { Restaurant_Box } from "../../stories/Restaurants/Box/Box";

import { SideBar } from "../../stories/SideBar/SideBar";
import { Animated, Pressable, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

export const MenuPage = ({ navigation }) => {
  const [showSideBar, setShowSideBar] = useState(false);
  const scaleValue = useRef(new Animated.Value(1)).current; // Valor de animação para a escala
  const translateXValue = useRef(new Animated.Value(0)).current; // Valor de animação para translação
  const sideBarTranslateXValue = useRef(
    new Animated.Value(-WidthScreen * 0.7)
  ).current;

  const handleToggleSidebar = () => {
    if (showSideBar) {
      // Animação para fechar a SideBar e restaurar o tamanho do conteúdo principal
      Animated.parallel([
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(translateXValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(sideBarTranslateXValue, {
          toValue: -WidthScreen * 0.7, // Move a SideBar para fora da tela
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      // Animação para abrir a SideBar e reduzir o tamanho do conteúdo principal
      Animated.parallel([
        Animated.timing(scaleValue, {
          toValue: 0.8,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(translateXValue, {
          toValue: WidthScreen * 0.8, // Move o conteúdo principal para o lado
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(sideBarTranslateXValue, {
          toValue: 0, // Move a SideBar para dentro da tela
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }
    setShowSideBar(!showSideBar);
  };

  const restaurants = useSelector((state: RootState) => state.restaurants);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Animated.View
          style={{
            transform: [{ translateX: sideBarTranslateXValue }],
            position: "absolute", // Posiciona sobre o conteúdo principal
            left: 0,
            top: 0,
            bottom: 0,
            zIndex: 1,
          }}
        >
          <SideBar navigation={navigation} />
        </Animated.View>
        <Animated.View
          style={{
            transform: [{ scale: scaleValue }, { translateX: translateXValue }],
            flex: 1,
          }}
        >
          <ScrollView flex={1} bg={"#FCFCFD"}>
            <Box>
              <HeaderBox
                marginTop={HeightScreen * 0.0431}
                marginBottom={HeightScreen * 0.0418}
                marginLeft={WidthScreen * 0.0667}
                leftComponent={
                  <Pressable
                    onPress={() => {
                      handleToggleSidebar();
                    }}
                  >
                    <ActionButton iconType="menu" />
                  </Pressable>
                }
                rightComponent={
                  <Image
                    rounded={"full"}
                    width={WidthScreen * 0.1013}
                    height={HeightScreen * 0.0486}
                    source={UserIcon}
                    alt="User picture"
                  />
                }
              >
                <Box
                  w={"full"}
                  marginTop={"0"}
                  marginX={"auto"}
                  textAlign={"center"}
                >
                  <Box
                    flexDir={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    alignContent={"center"}
                  >
                    <Text
                      fontWeight={500}
                      fontFamily={"Sofiapro-Regular"}
                      fontSize={"sm"}
                      color={"gray.600"}
                    >
                      Deliver to
                    </Text>
                    <ChevronDownIcon
                      color={"gray.600"}
                      style={{ width: WidthScreen * 0.03 }}
                    />
                  </Box>
                  <Box>
                    <Text
                      fontWeight={500}
                      fontFamily={"Sofiapro-Regular"}
                      fontSize={"sm"}
                      color={"orange.900"}
                    >
                      4102 Pretty View Lane
                    </Text>
                  </Box>
                </Box>
              </HeaderBox>

              <Title
                color={"black.300"}
                marginLeft={WidthScreen * 0.0667}
                marginBottom={HeightScreen * 0.0234}
                size={"2xl"}
              >
                What would you like to order
              </Title>
              <Box flexDir={"row"} marginLeft={WidthScreen * 0.0667}>
                <SearchBar marginRight={WidthScreen * 0.048} />
                <FilterButton />
              </Box>

              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  paddingTop: HeightScreen * 0.0393,
                  paddingLeft: WidthScreen * 0.0667,
                  paddingBottom: HeightScreen * 0.0273,
                  paddingRight: WidthScreen * 0.0667, // Garante espaço para a sombra no final
                  alignItems: "center", // Se necessário, para alinhar os itens verticalmente
                }}
                style={{
                  width: "100%",
                  backgroundColor: "#FCFCFD",
                  overflow: "visible",
                }}
              >
                {categories.map((item) => (
                  <CategorieButton
                    key={item.name} // Assumindo que 'name' é único
                    marginRight={WidthScreen * 0.0373}
                    imageSource={item.icon}
                    name={item.name}
                  />
                ))}
              </ScrollView>
              <Box flexDir={"row"}>
                <TextItem
                  color={"black.300"}
                  marginLeft={WidthScreen * 0.0667}
                  marginBottom={HeightScreen * 0.0234}
                  size={"lg"}
                  fontWeight={"bold"}
                  textAlign={"left"}
                >
                  Featured Restaurants
                </TextItem>
                <Pressable
                  onPress={() => {
                    navigation.navigate("ListRestaurants");
                  }}
                >
                  <TextItem
                    color={"orange.900"}
                    size={"sm"}
                    marginLeft={WidthScreen * 0.248}
                  >
                    View All {">"}
                  </TextItem>
                </Pressable>
              </Box>

              <FlatList
                w={"100%"}
                paddingLeft={WidthScreen * 0.0667}
                paddingBottom={HeightScreen * 0.0773}
                backgroundColor={"#FCFCFD"}
                flexWrap={"wrap"}
                data={restaurants.restaurants}
                renderItem={({ item }) => (
                  <Pressable
                    onPress={() =>
                      navigation.navigate("RestaurantPage", { item: item })
                    }
                  >
                    <Restaurant_Box
                      marginRight={WidthScreen * 0.0373}
                      name={item.name}
                      categories={item.categories}
                      deliveryTime={item.deliveryTime}
                      deliveryCost={item.deliveryCost}
                      imageUri={item.imageUri}
                    />
                  </Pressable>
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                removeClippedSubviews={true}
                nestedScrollEnabled={true} // Adicione esta linha
                contentContainerStyle={{
                  paddingRight: WidthScreen * 0.0667, // Adiciona espaço extra ao final da lista
                }}
              />
            </Box>
          </ScrollView>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};
