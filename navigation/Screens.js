import React from 'react';
import { Dimensions } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Icon } from '../components/';
import LandingPageComponent from '../screens/LandingPage';
import LoginComponent from '../screens/Login';
import { Images, materialTheme, tabs } from "../constants/";
import CustomDrawerContent from './Menu';

const { width } = Dimensions.get("screen");

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const profile = {
  avatar: Images.Profile,
  name: "Rachel Brown",
  type: "Seller",
  plan: "Pro",
  rating: 4.8
};

function HomePageStack(props){
  return(
    <Drawer.Navigator
    style={{ flex: 1 }}
      drawerContent={props => (
        <CustomDrawerContent {...props} profile={profile} />
      )}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8
      }}
      drawerContentOptions={{
        activeTintColor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: materialTheme.COLORS.ACTIVE,
        inactiveBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.74,
          paddingHorizontal: 12,
          justifyContent: "center",
          alignContent: "center",
          overflow: "hidden"
        },
        labelStyle: {
          fontSize: 18,
          fontWeight: "normal"
        }
      }}
      initialRouteName="Home">
         <Drawer.Screen
            name="Home"
            component={LoginComponent}
            options={{
              drawerIcon: ({ focused }) => (
                <Icon
                  size={16}
                  name="shop"
                  family="GalioExtra"
                  color={focused ? "white" : materialTheme.COLORS.MUTED}
                />
              )
            }}
        />
        <Drawer.Screen
            name={tabs.WALLET}
            component={LoginComponent}
            options={{
              drawerIcon: ({ focused }) => (
                <Icon
                  size={16}
                  name="shop"
                  family="GalioExtra"
                  color={focused ? "white" : materialTheme.COLORS.MUTED}
                />
              )
            }}
        />
        <Drawer.Screen
            name={tabs.REPORTS}
            component={LoginComponent}
            options={{
              drawerIcon: ({ focused }) => (
                <Icon
                  size={16}
                  name="shop"
                  family="GalioExtra"
                  color={focused ? "white" : materialTheme.COLORS.MUTED}
                />
              )
            }}
        />
        <Drawer.Screen
            name={tabs.SUPPORT}
            component={LoginComponent}
            options={{
              drawerIcon: ({ focused }) => (
                <Icon
                  size={16}
                  name="shop"
                  family="GalioExtra"
                  color={focused ? "white" : materialTheme.COLORS.MUTED}
                />
              )
            }}
        />

        <Drawer.Screen
            name={tabs.CONTACT_US}
            component={LoginComponent}
            options={{
              drawerIcon: ({ focused }) => (
                <Icon
                  size={16}
                  name="shop"
                  family="GalioExtra"
                  color={focused ? "white" : materialTheme.COLORS.MUTED}
                />
              )
            }}
        />


        <Drawer.Screen
            name={tabs.ABOUT_US}
            component={LoginComponent}
            options={{
              drawerIcon: ({ focused }) => (
                <Icon
                  size={16}
                  name="shop"
                  family="GalioExtra"
                  color={focused ? "white" : materialTheme.COLORS.MUTED}
                />
              )
            }}
        />


    </Drawer.Navigator>
  );
}

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
      <Stack.Screen name="homepage" component={HomePageStack} />
    </Stack.Navigator>
  );
}