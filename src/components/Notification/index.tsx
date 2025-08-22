import { Image, Text, View } from 'react-native';
import React from 'react';
import { NotificationItemProp } from './type';
import styles from './styles';

type NotificationProps = {
  item: NotificationItemProp;
};
const Notification = ({ item }: NotificationProps) => {
  return (
    <View style={styles.dataContainer}>
      <View>
        <Image source={{ uri: item.avatar }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.innerText}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <Text style={styles.message} numberOfLines={1} ellipsizeMode="tail">
          {item.message}
        </Text>
      </View>
    </View>
  );
};

export default Notification;
