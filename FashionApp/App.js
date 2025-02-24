import React from "react";
import { View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen"
import Cart from "./src/screens/Cart"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/Splash';
import LoginScreen from './src/screens/Login';
import RegisterScreen from './src/screens/Register';






const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        initialRouteName: 'Splash',

      }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
