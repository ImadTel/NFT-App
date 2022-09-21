/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';

import {
  SafeAreaView,
  Text,
} from 'react-native';

import Home from './screens/Home'
import Details from './screens/details';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


const App = () => {
 

  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="Home"> 
    <Stack.Screen  name='Details' component={Details} />
    <Stack.Screen    name='Home' component={Home} />
    
    
      

    </Stack.Navigator>

    </NavigationContainer>
   
  );
};





export default App;
