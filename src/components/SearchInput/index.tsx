import {
  StyleProp,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, { useState } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Colors from '../../utils/Colors/colors';

type SearchInputProps = {
  value: string | number;
  onChangeText?: (text: string) => void;
  startIcon?: IconProp;
  onEndIconPress?: () => void;
  endIcon?: IconProp;
  extraStyle?: StyleProp<ViewStyle>;
} & TextInputProps;

const SearchInput = ({
  startIcon,
  endIcon,
  onEndIconPress,
  value,
  onChangeText,
  extraStyle,
  ...rest
}: SearchInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={[styles.container]}>
      <View
        style={[
          styles.inputContainer,
          value.length > 0 || isFocused ? styles.activeInput : {},
          extraStyle,
        ]}
      >
        {startIcon && (
          <FontAwesomeIcon
            icon={startIcon}
            size={22}
            color={Colors.secondary}
          />
        )}

        <TextInput
          style={[styles.input]}
          placeholderTextColor={Colors.secondary}
          value={value.toString()}
          onChangeText={text => onChangeText?.(text)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          returnKeyLabel="return"
          {...rest}
        />

        {endIcon && (
          <TouchableOpacity onPress={onEndIconPress}>
            <FontAwesomeIcon
              icon={endIcon}
              size={22}
              color={Colors.secondary}
              style={[styles.endIcon]}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SearchInput;
