import React, { FunctionComponent, useState } from 'react';
import {
  View,
  TextInputProps,
  TouchableOpacity,
  Text,
  StyleProp,
  TextInput,
  ViewStyle,
} from 'react-native';
import styles from './styles';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Colors from '../../utils/Colors/colors';

export type InputProps = {
  value: string | number;
  inputLable?: string;
  startIcon?: IconProp;
  onEndIconPress?: () => void;
  endIcon?: IconProp;
  endText?: string;
  borderColor?: string;
  borderWidth?: number;
  viewStyle?: StyleProp<ViewStyle>;
  startText?: string;
} & TextInputProps;

const Input: FunctionComponent<InputProps> = ({
  startIcon,
  endIcon,
  onEndIconPress,
  inputLable,
  endText,
  viewStyle,
  value,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container]}>
      {inputLable && <Text style={styles.inputLabelText}>{inputLable}</Text>}
      <View
        style={[
          styles.inputContainer,
          isFocused ? styles.focusedInput : styles.notFocusedInput,
          viewStyle,
        ]}
      >
        {startIcon && (
          <FontAwesomeIcon
            icon={startIcon}
            size={22}
            color={
              isFocused || value.length > 0 ? Colors.primary : Colors.secondary
            }
          />
        )}

        <TextInput
          style={[styles.input]}
          placeholderTextColor="gray"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={value.toString()}
          returnKeyLabel="return"
          {...rest}
        />

        {endIcon && (
          <TouchableOpacity onPress={onEndIconPress}>
            <FontAwesomeIcon
              icon={endIcon}
              size={22}
              color={isFocused ? Colors.primary : Colors.secondary}
              style={styles.endIcon}
            />
          </TouchableOpacity>
        )}
        {endText && <Text style={styles.endText}>{endText}</Text>}
      </View>
    </View>
  );
};

export default Input;
