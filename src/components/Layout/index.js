import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from "../Module/Home";
import EarningScreen from "../Module/Earning";
import ProfileScreen from "../Module/Profile";
import StreetPickupScreen from "../Module/StreetPickup";

//Drawer
import AboutScreen from "../Module/About";
// stack

import ManageSignUp from "../Module/ManageSignUp";
import LoginScreen from "../Module/Login";
import SignUpScreen from "../Module/SignUp";
import ForgotPassword from "../Module/ForgotPassword";

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Payment" component={AboutScreen}/>
      <Drawer.Screen name="Settings" component={AboutScreen}/>
      <Drawer.Screen name="About" component={AboutScreen}/>
      <Drawer.Screen name="About" component={AboutScreen}/>
    </Drawer.Navigator>
  );
};


const Toptab = createMaterialTopTabNavigator();

function TopTabNavigation() {
  return (
    <Toptab.Navigator >
      <Toptab.Screen name="Home" component={HomeDrawer} />
      <Toptab.Screen name="Earning" component={EarningScreen} />
      <Toptab.Screen name="Profile" component={ProfileScreen} />
      <Toptab.Screen name="StreetPickup" component={StreetPickupScreen} />
    </Toptab.Navigator>
  );
}

const RootStack = createStackNavigator();

export default index = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="ManageSignUp" component={ManageSignUp} />
        <RootStack.Screen name="Login" component={LoginScreen} />
        <RootStack.Screen name="SignUp" component={SignUpScreen} />
        <RootStack.Screen name="Home" component={TopTabNavigation} options={{
                headerShown: false
            }}/>
        <RootStack.Screen name="Forgot Password" component={ForgotPassword} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

