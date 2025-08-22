import {
  StyleProp,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import React from 'react';
import styles from './styles';

export type ButtonProp = {
  text?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
} & TouchableOpacityProps;
const PrimaryButton = ({ text, onPress, style }: ButtonProp) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
