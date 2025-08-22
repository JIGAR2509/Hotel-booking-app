import { ImageBackground, Pressable, View } from 'react-native';
import React from 'react';
import styles from './styles';
import { HotelData } from './types';
import { ImageSourcePropType } from 'react-native';
import { Text } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigation/routes';
import Colors from '../../utils/Colors/colors';
import { HomescreenParams } from '../../navigation/types';

export type HotelFlatlistData = {
  item: HotelData;
};

const HotelFlatlist = ({ item }: HotelFlatlistData) => {
  const navigation = useNavigation<NavigationProp<HomescreenParams>>();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate(Routes.hotelScreen, { item });
      }}
    >
      <ImageBackground
        source={item.image as ImageSourcePropType}
        style={styles.image}
        borderRadius={40}
        blurRadius={1.5}
        resizeMode="stretch"
      >
        <View style={styles.container}>
          <Text style={styles.hotelName}>{item.name}</Text>
          <View style={styles.innerContainer}>
            <FontAwesomeIcon
              icon={faLocationDot as IconProp}
              size={15}
              color={Colors.white}
            />
            <Text style={styles.location}>{item.location}</Text>
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default HotelFlatlist;
