import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import Verification from "../pages/Verification/Verification";
import Loading from "../pages/Loading/Loading";
import React from "react";
import { MenuPage } from "../pages/Menu/Menu";
import Profile from "../pages/Profile/Profile";
import ListRestaurants from "../pages/ListRestaurants/ListRestaurants";
import { RestaurantPage } from "../pages/RestaurantPage/RestaurantPage";
import { DishPage } from "../pages/DishPage/DishPage";
import { Cart } from "../pages/Cart/Cart";
const Tab = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Welcome"
          component={WelcomePage}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Verification"
          component={Verification}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Loading"
          component={Loading}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Tab.Screen
          name="Menu"
          component={MenuPage}
          options={{ headerShown: false, gestureEnabled: false }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />

        <Tab.Screen
          name="ListRestaurants"
          component={ListRestaurants}
          options={{ headerShown: false }}
        />

        <Tab.Screen
          name="RestaurantPage"
          component={RestaurantPage}
          options={{ headerShown: false }}
        />

        <Tab.Screen
          name="DishPage"
          component={DishPage}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
