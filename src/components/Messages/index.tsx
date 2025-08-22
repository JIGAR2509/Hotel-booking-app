import { Image, Pressable, Text, View } from 'react-native';
import React from 'react';
import { MessageItemProps } from './type';
import styles from './styles';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigation/routes';
import { HomescreenParams } from '../../navigation/types';

type MessageProps = {
  item: MessageItemProps;
};
const Messages = ({ item }: MessageProps) => {
  const navigation = useNavigation<NavigationProp<HomescreenParams>>();
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate(Routes.chatScreen, { item })}
    >
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <View style={styles.upperText}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <View style={styles.lowerText}>
          <Text style={styles.message}>{item.message}</Text>
          {item.unreadCount && (
            <Text style={styles.count}>{item.unreadCount}</Text>
          )}
        </View>
      </View>
    </Pressable>
  );
};

export default Messages;
