import { Text, TouchableOpacity, View } from 'react-native';
import React, { Dispatch, SetStateAction } from 'react';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Colors from '../../utils/Colors/colors';

export type PersonSelectorProps = {
  title: string;
  condition: string;
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
};
const PersonSelector = ({
  title,
  condition,
  value,
  setValue,
}: PersonSelectorProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.condition}>{condition}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => setValue(Math.max(0, value - 1))}
          style={[styles.button, { backgroundColor: Colors.gray }]}
        >
          <FontAwesomeIcon
            icon={faMinus as IconProp}
            size={13}
            color={Colors.black}
          />
        </TouchableOpacity>
        <Text style={styles.count}>{value}</Text>
        <TouchableOpacity
          onPress={() => setValue(value + 1)}
          style={[styles.button, { backgroundColor: Colors.primary }]}
        >
          <FontAwesomeIcon
            icon={faPlus as IconProp}
            size={13}
            color={Colors.white}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PersonSelector;
