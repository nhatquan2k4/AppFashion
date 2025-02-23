import React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, ScrollView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';



import LoadingScreen from './src/screens/LoadingScreen.js';
import { theme } from './src/core/theme.js';
import { Products } from 'Product';



const App = () => {
  return (
    <div>

      <h1>Welcome to Our Shop</h1>
      <Products />
    </div>
  );
};

export default App
