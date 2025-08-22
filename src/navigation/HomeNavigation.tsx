import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HotelScreen from '../screens/HotelScreen';
import AppStack from './AppStack';
import NotificationScreen from '../screens/NotificationScreen';
import { Routes } from './routes';
import ReviewScreen from '../screens/ReviewScreen';
import CalendarScreen from '../screens/CalendarScreen';
import CheckOutScreen from '../screens/CheckOutScreen';
import NestedSearch from '../screens/NestedSearchScreen';
import PopularSearch from '../screens/PopularSearchScreen';
import MapScreen from '../screens/MapScreen';
import SettingScreen from '../screens/SettingScreen';
import NotificationSettingScreen from '../screens/NotificationSettingScreen';
import LanguageScreen from '../screens/LanguageScreen';
import ProfileSettingScreen from '../screens/ProfileSettingScreen';
import CreatePassword from '../screens/CreatePassword';
import FavouriteScreen from '../screens/FavouriteScreen';
import CouponScreen from '../screens/CouponScreen';
import ChatScreen from '../screens/ChatScreen';
import TransactionScreen from '../screens/TransactionScreen';

const Stack = createNativeStackNavigator();
const HomeNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Routes.appStack} component={AppStack} />

      <Stack.Screen name={Routes.hotelScreen} component={HotelScreen} />
      <Stack.Screen name={Routes.notification} component={NotificationScreen} />
      <Stack.Screen name={Routes.reviewScreen} component={ReviewScreen} />
      <Stack.Screen name={Routes.calendarScreen} component={CalendarScreen} />
      <Stack.Screen name={Routes.checkOutScreen} component={CheckOutScreen} />
      <Stack.Screen name={Routes.nestedSearchScreen} component={NestedSearch} />
      <Stack.Screen
        name={Routes.popularSearchScreen}
        component={PopularSearch}
      />
      <Stack.Screen name={Routes.mapScreen} component={MapScreen} />
      <Stack.Screen name={Routes.settingScreen} component={SettingScreen} />
      <Stack.Screen
        name={Routes.notificationSettingScreen}
        component={NotificationSettingScreen}
      />
      <Stack.Screen name={Routes.laguageScreen} component={LanguageScreen} />
      <Stack.Screen
        name={Routes.profileSettingScreen}
        component={ProfileSettingScreen}
      />
      <Stack.Screen name={Routes.createPassword} component={CreatePassword} />
      <Stack.Screen name={Routes.favouriteScreen} component={FavouriteScreen} />
      <Stack.Screen name={Routes.couponScreen} component={CouponScreen} />
      <Stack.Screen name={Routes.chatScreen} component={ChatScreen} />
      <Stack.Screen
        name={Routes.transactionScreen}
        component={TransactionScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
