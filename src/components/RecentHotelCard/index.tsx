/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import { Image, Pressable, Text, View } from 'react-native';
import React from 'react';
import styles from './styles';
import { HotelData } from '../HotelFlatlist/types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBed, faDumbbell, faWifi } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Colors from '../../utils/Colors/colors';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigation/routes';
import { HomescreenParams } from '../../navigation/types';
import { en } from '../../translations/en';

type Props = {
  item: HotelData;
};
const RecentHotelCard = ({ item }: Props) => {
  const navigation = useNavigation<NavigationProp<HomescreenParams>>();

  return (
    <Pressable
      style={[
        styles.container,
        { display: item.location === 'Ukraine, Bukovel' ? undefined : 'none' },
      ]}
      onPress={() => navigation.navigate(Routes.hotelScreen, { item })}
    >
      <View style={styles.upperContainer}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{item.pricePerNight}</Text>
          <Text style={styles.perNight}>{en.perNight}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.location}>{item.location}</Text>
        </View>
      </View>
      <View style={styles.seperator}></View>
      <View style={styles.amenityRow}>
        <View style={styles.amenity}>
          <FontAwesomeIcon
            icon={faBed as IconProp}
            size={18}
            color={Colors.primary}
          />
          <Text style={styles.amenityText}>
            {item.beds} {en.common.beds}
          </Text>
        </View>

        <View style={styles.dot}></View>

        <View style={styles.amenity}>
          <FontAwesomeIcon
            icon={faWifi as IconProp}
            size={18}
            color={Colors.primary}
          />
          <Text style={styles.amenityText}>{en.common.wifi}</Text>
        </View>

        <View style={styles.dot}></View>

        <View style={styles.amenity}>
          <FontAwesomeIcon
            icon={faDumbbell as IconProp}
            size={18}
            color={Colors.primary}
          />
          <Text style={styles.amenityText}>{en.common.gym}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default RecentHotelCard;
