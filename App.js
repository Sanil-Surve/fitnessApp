const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Registration from "./screens/Registration";
import RegisterPage1 from "./screens/RegisterPage1";
import RegisterPage2 from "./screens/RegisterPage2";
import RegisterPage31 from "./screens/RegisterPage31";
import RegisterPage32 from "./screens/RegisterPage32";
import RegisterPage33 from "./screens/RegisterPage33";
import LoginPage from "./screens/LoginPage";
import SuccessRegistration from "./screens/SuccessRegistration";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";


const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins.ttf"),
    Inter: require("./assets/fonts/Inter.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins_bold.ttf"),
    PoppinsMedium: require("./assets/fonts/Poppins_medium.ttf"),
    PoppinsSemibold: require("./assets/fonts/Poppins_semibold.ttf"),
    PoppinsRegular: require("./assets/fonts/Poppins_regular.ttf"),
    // InterRegular: require("./assets/fonts/Inter_regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Provider store={store}>
          <NavigationContainer>
            {hideSplashScreen ? (
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                  name="Registration"
                  component={Registration}
                  options={{ headerShown: false }}
                />
                {/* <Stack.Screen
                  name="RegisterPage1"
                  component={RegisterPage1}
                  options={{ headerShown: false }}
                /> */}
                <Stack.Screen
                  name="RegisterPage2"
                  component={RegisterPage2}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="RegisterPage31"
                  component={RegisterPage31}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="RegisterPage32"
                  component={RegisterPage32}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="RegisterPage33"
                  component={RegisterPage33}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="LoginPage"
                  component={LoginPage}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="SuccessRegistration"
                  component={SuccessRegistration}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator>
            ) : null}
          </NavigationContainer>
      </Provider>
    </>
  );
};
export default App;
