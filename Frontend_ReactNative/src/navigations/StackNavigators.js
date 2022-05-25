import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import RequestScreen from "../screens/RequestScreen";
import DestinationScreen from "../screens/DestinationScreen";
import SplashScreen from "../screens/SplashScreen";
import SigninScreen from "../screens/SigninScreen";
import SignupScreen from "../screens/SignupScreen";
import ForgotPassword from "../screens/ForgotPassword";
import AddScreen from "../screens/AddScreen";
import RatingScreen from "../screens/RatingScreen";
import CalculateScreen from "../screens/CalculateScreen";
import SignupVerifyScreen from "../screens/SignupVerifyDriverScreen";
import CameraScreen from "../screens/CameraScreen";
import SignupVerifyDriverScreen from "../screens/SignupVerifyDriverScreen";
import SignupVerifyPassengerScreen from "../screens/SignupVerifyPassengerScreen";
import ReqBookScreen from "../screens/ReqBookScreen";
import BookScreen from "../screens/BookScreen";

const Home = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Home.Navigator>
      <Home.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Home.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Home.Screen
        name="CalculateScreen"
        component={CalculateScreen}
        options={{ headerShown: false }}
      />
      
      
      <Home.Screen
        name="RatingScreen"
        component={RatingScreen}
        options={{ headerShown: false }}
      />

      <Home.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Home.Screen
        name="SigninScreen"
        component={SigninScreen}
        options={{ headerShown: false }}
      />

      <Home.Screen
        name="ReqBookScreen"
        component={ReqBookScreen}
        options={{ headerShown: false }}
      />
      <Home.Screen
        name="BookScreen"
        component={BookScreen}
        options={{ headerShown: false }}
      />

      <Home.Screen
        name="SignupVerifyDriverScreen"
        component={SignupVerifyDriverScreen}
        options={{ headerShown: false }}
      />
      <Home.Screen
        name="SignupVerifyPassengerScreen"
        component={SignupVerifyPassengerScreen}
        options={{ headerShown: false }}
      />

      <Home.Screen
        name="RequestScreen"
        component={RequestScreen}
        options={{ headerShown: false }}
      />

      <Home.Screen
        name="DestinationScreen"
        component={DestinationScreen}
        options={{ headerShown: false }}
      />

      <Home.Screen
        name="AddScreen"
        component={AddScreen}
        options={{ headerShown: false }}
      />

      <Home.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />

      <Home.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{ headerShown: false }}
      />
    </Home.Navigator>
  );
}
