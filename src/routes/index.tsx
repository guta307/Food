import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import Verification from "../pages/Verification/Verification";
import Loading from "../pages/Loading/Loading";
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
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
