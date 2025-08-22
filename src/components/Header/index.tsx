import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import BackButton from '../BackButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from './styles';
import { StyleProp } from 'react-native';
import { ViewStyle } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Colors from '../../utils/Colors/colors';
import {
  AuthStackParams,
  HomescreenParams,
  MainStackParams,
} from '../../navigation/types';

export type HeaderProps = {
  headerText: string;
  icon?: IconProp;
  onEndIconPress?: () => void;
  style?: StyleProp<ViewStyle>;
};
const CustomHeader = ({
  headerText,
  icon,
  style,
  onEndIconPress,
}: HeaderProps) => {
  const navigation =
    useNavigation<
      NavigationProp<AuthStackParams & MainStackParams & HomescreenParams>
    >();
  return (
    <View style={[styles.header]}>
      <BackButton
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text style={[styles.headerText, style]}>{headerText}</Text>
      {icon && (
        <TouchableOpacity style={[styles.button]} onPress={onEndIconPress}>
          <FontAwesomeIcon icon={icon} size={25} color={Colors.black} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomHeader;
