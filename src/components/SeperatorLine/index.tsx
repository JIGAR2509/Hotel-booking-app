import { StyleProp, View, ViewStyle } from 'react-native';
import React from 'react';
import styles from './styles';

type SeperatorProps = {
  style?: StyleProp<ViewStyle>;
};
const SeperatorLine = ({ style }: SeperatorProps) => {
  return <View style={[styles.seperator, style]} />;
};

export default SeperatorLine;
