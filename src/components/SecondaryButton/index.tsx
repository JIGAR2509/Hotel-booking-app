import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

import styles from './styles';
import { ButtonProp } from '../PrimaryButton';

const SecondaryButton = ({ text, onPress }: ButtonProp) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SecondaryButton;
