import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SwiperScreen from '../screens/OnboardingScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import CreateAccount from '../screens/CreateAccount';
import VerifyAccount from '../screens/VeifyAccountScreen';
import LoginScreen from '../screens/LoginScreen';
import ForgotPassword from '../screens/ForgotPassword';
import CreatePassword from '../screens/CreatePassword';
import { Routes } from './routes';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Routes.swiperScreen} component={SwiperScreen} />
      <Stack.Screen name={Routes.welcome} component={WelcomeScreen} />
      <Stack.Screen name={Routes.createAccount} component={CreateAccount} />
      <Stack.Screen name={Routes.verifyAccount} component={VerifyAccount} />
      <Stack.Screen name={Routes.login} component={LoginScreen} />
      <Stack.Screen name={Routes.forgotPassword} component={ForgotPassword} />
      <Stack.Screen name={Routes.createPassword} component={CreatePassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;
