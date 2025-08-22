/* eslint-disable react/self-closing-comp */
import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export type ScreenHeaderProp = {
  title: string;
  icon: IconProp;
  onIconPress?: () => void;
  dot?: boolean;
};
const ScreenHeader = ({ title, icon, onIconPress, dot }: ScreenHeaderProp) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {dot && <View style={styles.dot}></View>}
      <TouchableOpacity style={styles.icon} onPress={onIconPress}>
        <FontAwesomeIcon icon={icon as IconProp} size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default ScreenHeader;
