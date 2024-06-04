import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/Screens/HomeScreen';
import SignupScreen from './app/Screens/SignupScreen';
import LoginScreen from './app/Screens/LoginScreen';
import NextSignupStepScreen from './app/Screens/NextSignupStepScreen' ;

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="NextSignupStep" component={NextSignupStepScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
