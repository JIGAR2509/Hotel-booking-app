import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splashscreen from '../screens/SplashScreen';
import AuthStack from './AuthStack';
import HomeNavigation from './HomeNavigation';
import { Routes } from './routes';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
      // initialRouteName={Routes.homeNavigation}
    >
      <Stack.Screen name={Routes.splashScreen} component={Splashscreen} />
      <Stack.Screen name={Routes.authStack} component={AuthStack} />
      <Stack.Screen name={Routes.homeNavigation} component={HomeNavigation} />
    </Stack.Navigator>
  );
};

export default MainStack;
