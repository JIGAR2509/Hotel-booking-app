import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import React from 'react';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type BackButtonProp = {
  onPress?: () => void;
  ExtraStyle?: StyleProp<ViewStyle>;
};
const BackButton = ({ onPress, ExtraStyle }: BackButtonProp) => {
  return (
    <TouchableOpacity style={[styles.backButton, ExtraStyle]} onPress={onPress}>
      <FontAwesomeIcon icon={faArrowLeft as IconProp} size={20} />
    </TouchableOpacity>
  );
};

export default BackButton;
