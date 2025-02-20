// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// // import SplashScreen from './screens/Splash';
// import LoadingScreen from './screens/Loading';
// // import LoginScreen from './screens/Login';
// // import RegisterScreen from './screens/Register';

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Loading" component={LoadingScreen} />
//         <Stack.Screen name="Splash" component={SplashScreen} />
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="Register" component={RegisterScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import LoadingScreen from './screens/Loading';
//import SplashScreen from './screens/Splash';
//import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Register';



export default function App() {
  return <RegisterScreen />;
}
