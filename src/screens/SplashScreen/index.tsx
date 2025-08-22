import React, { useEffect } from 'react';
import { Image } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import styles from './styles';
import { Routes } from '../../navigation/routes';
import { MainStackParams } from '../../navigation/types';

const Splashscreen = () => {
  const navigation = useNavigation<NavigationProp<MainStackParams>>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(Routes.authStack);
    }, 2000);
  });

  return (
    <Image
      style={styles.img}
      source={require('/Users/sky9two/Desktop/Project/HotelBooking/src/assets/images/a78ed01ec75536f50134911e98955dae.jpg')}
    />
  );
};

export default Splashscreen;
