import { Image, Text, View } from 'react-native';
import React from 'react';
import styles from './styles';
import { ReviewPersonProp } from './type';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Colors from '../../utils/Colors/colors';

type ReviewFlatlistProp = {
  item: ReviewPersonProp;
};

const ReviewPerson = ({ item }: ReviewFlatlistProp) => {
  return (
    <View style={styles.dataContainer}>
      <Image source={{ uri: item.avatar }} style={styles.image} />
      <View style={styles.textContainer}>
        <View style={styles.innerText}>
          <Text style={styles.title}>{item.name}</Text>
          <View style={styles.rating}>
            <FontAwesomeIcon
              icon={faStar as IconProp}
              size={16}
              color={Colors.starYellow}
            />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
        </View>
        <Text style={styles.comment}>{item.comment}</Text>
      </View>
    </View>
  );
};

export default ReviewPerson;
