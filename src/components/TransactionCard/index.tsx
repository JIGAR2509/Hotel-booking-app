import { Image, Text, View } from 'react-native';
import React from 'react';
import { BookingTransactionProps } from './types';
import styles from './styles';
import PrimaryButton from '../PrimaryButton';
import { en } from '../../translations/en';

export type TransactionCardProps = {
  item: BookingTransactionProps;
};
const TransactionCard = ({ item }: TransactionCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.date}>{item.date}</Text>
        <View
          style={[
            styles.status,
            item.status === 'Waiting'
              ? styles.waitingStatus
              : styles.finishedStatus,
          ]}
        >
          <Text
            style={[
              styles.statusText,
              item.status === 'Waiting'
                ? styles.waitingText
                : styles.finishedText,
            ]}
          >
            {item.status}
          </Text>
        </View>
      </View>
      <View style={styles.imageRow}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.hotelName}>{item.hotelName}</Text>
          <Text style={styles.details}>
            {item.guests} {en.checkOut.guests}, {item.rooms} {en.checkOut.room}
          </Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.priceContainer}>
          <Text style={styles.details}>{en.totalPrice}</Text>
          <Text style={styles.priceText}>
            {en.common.$}
            {item.totalPrice}
          </Text>
        </View>
        <PrimaryButton
          text={
            item.status === 'Waiting' ? en.buttons.checkIn : en.buttons.ratings
          }
          style={styles.button}
        />
      </View>
    </View>
  );
};

export default TransactionCard;
