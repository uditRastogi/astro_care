import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import LandingPageComponent from '../screens/LandingPage';
import LoginComponent from '../screens/Login';


const Stack = createStackNavigator();

export default function LandingPage(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="LandingPage"
        component={LandingPageComponent}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen name="SignIn" component={LoginComponent} />
    </Stack.Navigator>
  );
}