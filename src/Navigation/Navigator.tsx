/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
/* eslint-disable space-infix-ops */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false,
        }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      
    </Stack.Navigator>
  );
}