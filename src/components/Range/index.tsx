import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Colors from '../../utils/Colors/colors';

type RangeProp = {
  label: string;
  firstvalue: string;
  secondvalue: string;
  endIcon?: IconProp;
  onEndIconPress?: () => void;
} & TextInputProps;

const RangeComponent = ({
  label,
  endIcon,
  onEndIconPress,
  firstvalue,
  secondvalue,
  ...rest
}: RangeProp) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.inputLabelText}>{label}</Text>
      <View style={styles.inputContainer}>
        <View
          style={[
            styles.inputInner,
            isFocused || value1.length > 0
              ? styles.focusedInput
              : styles.notFocusedInput,
          ]}
        >
          <TextInput
            style={styles.input}
            placeholder={firstvalue}
            placeholderTextColor={Colors.secondary}
            keyboardType="numeric"
            value={value1}
            onChangeText={setValue1}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...rest}
          />
          {endIcon && (
            <TouchableOpacity onPress={onEndIconPress}>
              <FontAwesomeIcon
                icon={endIcon}
                size={20}
                color={
                  isFocused || value1.length > 0
                    ? Colors.primary
                    : Colors.secondary
                }
              />
            </TouchableOpacity>
          )}
        </View>
        <View
          style={[
            styles.inputInner,
            isSelected || value2.length > 0
              ? styles.focusedInput
              : styles.notFocusedInput,
          ]}
        >
          <TextInput
            style={styles.input}
            placeholder={secondvalue}
            placeholderTextColor={Colors.secondary}
            keyboardType="numeric"
            value={value2}
            onChangeText={setValue2}
            onFocus={() => setIsSelected(true)}
            onBlur={() => setIsSelected(false)}
            {...rest}
          />
          {endIcon && (
            <TouchableOpacity onPress={onEndIconPress}>
              <FontAwesomeIcon
                icon={endIcon}
                size={20}
                color={
                  isSelected || value2.length > 0
                    ? Colors.primary
                    : Colors.secondary
                }
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default RangeComponent;
