import { Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Colors from '../../utils/Colors/colors';

export type CheckBoxProps = {
  dataArray: string[];
  label?: string;
  defaultValue?: string[];
};

const CheckBox = ({ dataArray, label, defaultValue = [] }: CheckBoxProps) => {
  const [selectedItems, setSelectedItems] = useState(defaultValue);

  const toggleSelection = (item: string) => {
    setSelectedItems(prevSelected =>
      prevSelected.includes(item)
        ? prevSelected.filter(selected => selected !== item)
        : [...prevSelected, item],
    );
  };

  return (
    <>
      {label && <Text style={styles.label}>{label}</Text>}
      {dataArray.map((item, index) => {
        const isItemSelected = selectedItems.includes(item);

        return (
          <TouchableOpacity
            key={index}
            style={styles.arrayItems}
            onPress={() => toggleSelection(item)}
          >
            <Text style={styles.item}>{item}</Text>

            {isItemSelected ? (
              <View style={styles.checkIcon}>
                <FontAwesomeIcon
                  icon={faCheck as IconProp}
                  color={Colors.white}
                  size={13}
                />
              </View>
            ) : (
              <View style={styles.unchecked} />
            )}
          </TouchableOpacity>
        );
      })}
    </>
  );
};

export default CheckBox;
