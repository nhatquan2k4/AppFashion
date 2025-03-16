import React from "react";
import { View } from "react-native";
// import HomeScreen from "./src/screens/HomeScreen"
// import ProductDetailScreen from "./src/screens/ProductDetailScreen";
// import Cart from "./src/screens/Cart"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import LoadingScreen from './src/screens/Loading';
// import SplashScreen from './src/screens/Splash';
// import LoginScreen from './src/screens/Login';
// import RegisterScreen from './src/screens/Register';
// import ForgotPasswordScreen from './src/screens/ForgotPassword';
// import SuccessScreen from "./src/screens/SuccessScreen";
import FailedScreen from "./src/screens/FailedScreen";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Failed"
        screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} /> */}
        {/* <Stack.Screen name="Success" component={SuccessScreen} /> */}
        <Stack.Screen name="Failed" component={FailedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
