import { Image } from 'react-native';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { HotelImagePair } from './types';

type PopularHotelProps = {
  item: HotelImagePair;
};

const PopularCard = ({ item }: PopularHotelProps) => {
  return (
    <View style={styles.imageConatainer}>
      <Image
        source={{ uri: item.images[0] }}
        resizeMode="stretch"
        borderRadius={40}
        style={styles.images}
      />
      <Image
        source={{ uri: item.images[1] }}
        resizeMode="stretch"
        borderRadius={40}
        style={styles.images}
      />
    </View>
  );
};

export default PopularCard;
