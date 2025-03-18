// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TestLoginScreen from './src/screens/TestLoginScreen';
import TestHomeScreen from './src/screens/TestHomeScreen';
import TestRegisterScreen from './src/screens/TestRegisterScreen';
import TestForgotPasswordScreen from './src/screens/TestForgotPassWordScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TestLoginScreen">
        <Stack.Screen name="TestLoginScreen" component={TestLoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TestHomeScreen" component={TestHomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="TestRegisterScreen" component={TestRegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TestForgotPasswordScreen" component={TestForgotPasswordScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}