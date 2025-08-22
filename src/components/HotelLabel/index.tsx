import {
  Image,
  Pressable,
  PressableProps,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Colors from '../../utils/Colors/colors';
import { HotelData } from '../HotelFlatlist/types';
import { Routes } from '../../navigation/routes';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { HomescreenParams } from '../../navigation/types';
import { en } from '../../translations/en';

export type HotelLableProps = {
  item: HotelData;
  style?: StyleProp<ViewStyle>;
} & PressableProps;
const HotelLabel = ({ item, style, ...rest }: HotelLableProps) => {
  const navigation = useNavigation<NavigationProp<HomescreenParams>>();
  return (
    <Pressable
      style={[styles.labelContainer, style]}
      onPress={() => navigation.navigate(Routes.hotelScreen, { item })}
      {...rest}
    >
      <Image source={item.image} style={styles.image} />
      <View style={styles.sideConatiner}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.location}>{item.location}</Text>
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.innerContainer}>
            <Text style={styles.price}>
              {en.common.$}
              {item.pricePerNight}
            </Text>
            <Text style={styles.perNight}>{en.perNight}</Text>
          </View>
          <View style={styles.ratingContainer}>
            <FontAwesomeIcon
              icon={faStar as IconProp}
              size={15}
              color={Colors.starYellow}
            />
            <Text style={styles.rating}>{item.rating}</Text>
            <Text style={styles.reviewCount}>
              ({item.reviewCount} {en.common.reviews})
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default HotelLabel;
