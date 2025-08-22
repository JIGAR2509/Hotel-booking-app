import { Image, Text, View } from 'react-native';
import React from 'react';
import ScreenHeader from '../../components/ScreenHeader';
import {
  faGear,
  faGreaterThan,
  faMoneyCheckAlt,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from './styles';
import OptionBox from '../../components/OptionBox';
import { faClockFour, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons/faSignOut';
import Layout from '../../components/Layout';
import { Routes } from '../../navigation/routes';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Colors from '../../utils/Colors/colors';
import { useToast } from 'react-native-toast-notifications';
import { HomescreenParams, MainStackParams } from '../../navigation/types';
import { en } from '../../translations/en';

const ProfileScreen = () => {
  const navigation =
    useNavigation<NavigationProp<HomescreenParams & MainStackParams>>();
  const toast = useToast();

  const logoutHandler = () => {
    toast.show(en.toast.loggingOut, {
      duration: 2000,
      type: 'success',
      style: {
        backgroundColor: Colors.red,
        borderColor: Colors.black,
        borderBottomWidth: 2,
        paddingHorizontal: 20,
      },
      textStyle: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: 500,
      },
    });

    setTimeout(() => {
      navigation.navigate(Routes.authStack, { screen: Routes.login });
      toast.show(en.toast.logoutSuccess, {
        duration: 2000,
        type: 'success',
        textStyle: {
          color: Colors.white,
          fontSize: 16,
          fontWeight: 500,
        },
      });
    }, 2000);
  };
  return (
    <Layout edges={['top']} backgroundColor scrollable>
      <ScreenHeader
        title={en.common.profile}
        icon={faGear as IconProp}
        dot={false}
        onIconPress={() => {
          navigation.navigate(Routes.settingScreen);
        }}
      />
      <View style={styles.profileContainer}>
        <View style={styles.photoContainer}>
          <Image
            source={require('/Users/sky9two/Desktop/Project/HotelBooking/src/assets/images/profilephoto.jpg')}
            style={styles.image}
          />
          <Text style={styles.name}>{en.profile.user.name}</Text>
          <Text style={styles.location}>{en.profile.user.location}</Text>
        </View>
        <View style={styles.activityBox}>
          <View style={styles.activity}>
            <Text style={styles.activityCount}>26</Text>
            <Text style={styles.activityName}>
              {en.profile.activity.transactions}
            </Text>
          </View>
          <View style={styles.activity}>
            <Text style={styles.activityCount}>12</Text>
            <Text style={styles.activityName}>{en.common.reviews}</Text>
          </View>
          <View style={styles.activity}>
            <Text style={styles.activityCount}>4</Text>
            <Text style={styles.activityName}>
              {en.profile.activity.bookings}
            </Text>
          </View>
        </View>
      </View>
      <Text style={styles.optionText}>{en.profile.options.title}</Text>
      <View style={styles.optionContainer}>
        <OptionBox
          startIcon={faHeart as IconProp}
          title={en.profile.options.favourite}
          endIcon={faGreaterThan as IconProp}
          onPress={() => navigation.navigate(Routes.favouriteScreen)}
        />
        <OptionBox
          startIcon={faClockFour as IconProp}
          title={en.profile.options.transaction}
          endIcon={faGreaterThan as IconProp}
          onPress={() => navigation.navigate(Routes.transactionScreen)}
        />
        <OptionBox
          startIcon={faMoneyCheckAlt as IconProp}
          title={en.profile.options.coupon}
          endIcon={faGreaterThan as IconProp}
          onPress={() => navigation.navigate(Routes.couponScreen)}
        />
        <OptionBox
          startIcon={faSignOut as IconProp}
          title={en.profile.options.logout}
          textColor={Colors.red}
          iconColor={Colors.red}
          onPress={logoutHandler}
        />
      </View>
    </Layout>
  );
};

export default ProfileScreen;
