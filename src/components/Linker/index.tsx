import { Text, View } from 'react-native';
import React from 'react';
import styles from './styles';
import SecondaryButton from '../SecondaryButton';
import { ButtonProp } from '../PrimaryButton';

export type LinkerProps = {
  question: string;
} & ButtonProp;
const Linker = ({ question, text, onPress }: LinkerProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{question}</Text>
      <SecondaryButton text={text} onPress={onPress} />
    </View>
  );
};

export default Linker;
