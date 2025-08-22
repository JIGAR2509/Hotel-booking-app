import { Image, ImageRequireSource, Text, View } from 'react-native';
import React from 'react';
import styles from './styles';

type SwiperSlideProps = {
  image: ImageRequireSource;
  title: string;
  description: string;
};
const SwiperSlide = ({ image, title, description }: SwiperSlideProps) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.img} />
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
    </View>
  );
};

export default SwiperSlide;
