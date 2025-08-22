import { NavigatorScreenParams } from '@react-navigation/native';
import { HotelData } from '../components/HotelFlatlist/types';
import { MessageItemProps } from '../components/Messages/type';

export type MainStackParams = {
  splash: undefined;
  authStack: NavigatorScreenParams<AuthStackParams> | undefined;
  homeNavigation: NavigatorScreenParams<HomescreenParams> | undefined;
};

export type AuthStackParams = {
  swiper: undefined;
  welcome: undefined;
  verifyAccount: {
    phoneNumber: string;
  };
  login: undefined;
  createPassword: undefined;
  forgotPassword: undefined;
  createAccount: undefined;
};

export type HomescreenParams = {
  homeScreen: undefined;
  hotelScreen: {
    item: HotelData;
  };
  reviewScreen: {
    item: HotelData;
  };
  calendarScreen: {
    item: HotelData;
  };
  checkOutScreen: {
    item: HotelData;
    dates?: string;
  };
  popularSearchScreen: {
    item?: HotelData;
    searchValue: string;
  };
  mapScreen: undefined;
  chatScreen: {
    item: MessageItemProps;
  };
  favouriteScreen: undefined;
  notification: undefined;
  profileScreen: undefined;
  profileSettingScreen: undefined;
  notificationSettingScreen: undefined;
  laguageScreen: undefined;
  transactionScreen: undefined;
  couponScreen: undefined;
  settingScreen: undefined;
  nestedSearchScreen: undefined;
};
