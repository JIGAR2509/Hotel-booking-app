import {
  Image,
  ImageSourcePropType,
  Pressable,
  Switch,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Colors from '../../utils/Colors/colors';

export type OptionBoxProps = {
  title: string;
  startIcon?: IconProp;
  image?: ImageSourcePropType;
  endText?: string;
  endIcon?: IconProp | null;
  onPress?: () => void;
  switchShow?: boolean;
  iconColor?: string;
  textColor?: string;
  border?: boolean;
};
const OptionBox = ({
  title,
  startIcon,
  endIcon,
  endText,
  onPress,
  switchShow,
  iconColor,
  textColor,
  image,
  border,
}: OptionBoxProps) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(!isEnabled);

  return (
    <Pressable
      style={[styles.box, border ? styles.selected : null]}
      onPress={onPress}
    >
      <View style={styles.leftElements}>
        {image && <Image source={image} style={styles.image} />}
        {startIcon && (
          <FontAwesomeIcon
            icon={startIcon}
            color={!iconColor ? Colors.black : iconColor}
            size={25}
          />
        )}
        {title && (
          <Text style={[styles.title, { color: textColor }]}>{title}</Text>
        )}
      </View>
      <View style={styles.rightElements}>
        {endText && <Text style={styles.endText}>{endText}</Text>}
        {endIcon && (
          <FontAwesomeIcon
            icon={endIcon}
            color={!iconColor ? Colors.secondary : iconColor}
          />
        )}
        {switchShow && (
          <Switch
            trackColor={{ false: '#CCC', true: '#084B83' }}
            thumbColor="#ffffff"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        )}
      </View>
    </Pressable>
  );
};

export default OptionBox;
