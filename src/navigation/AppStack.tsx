/* eslint-disable react/no-unstable-nested-components */
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import MessageScreen from '../screens/MessageScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faSearch,
  faMessage,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Routes } from './routes';
import Colors from '../utils/Colors/colors';

const Tab = createBottomTabNavigator();
const AppStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.white,
          height: 90,
          paddingTop: 10,
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 5,
        },
        tabBarLabelPosition: 'below-icon',
      }}
    >
      <Tab.Screen
        name={Routes.homeScreen}
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon
              icon={faHome as IconProp}
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.searchScreen}
        component={SearchScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon
              icon={faSearch as IconProp}
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.messageScreen}
        component={MessageScreen}
        options={{
          title: 'Messages',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon
              icon={faMessage as IconProp}
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.profileScreen}
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon
              icon={faUser as IconProp}
              size={25}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
