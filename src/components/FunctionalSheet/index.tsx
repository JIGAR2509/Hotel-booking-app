import { Text, TouchableOpacity, View } from 'react-native';
import React, { ReactNode } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import PrimaryButton from '../PrimaryButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import styles from './styles';
import BottomSheet from '../BottomSheet';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import Colors from '../../utils/Colors/colors';

export type FunctionalSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  backGroundColor?: string;
  title?: string;
  children: ReactNode;
  buttonTitle: string;
  onPress?: () => void;
  sheetHeight: number;
};

const FunctionalSheet = ({
  isOpen,
  onClose,
  title,
  backGroundColor,
  buttonTitle,
  onPress,
  children,
  sheetHeight,
}: FunctionalSheetProps) => {
  return (
    <BottomSheet
      isOpen={isOpen}
      onClose={onClose}
      backGroundColor={backGroundColor}
      sheetHeight={sheetHeight}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
        <TouchableOpacity
          onPress={() => {
            onClose();
          }}
        >
          <FontAwesomeIcon
            icon={faClose as IconProp}
            size={25}
            color={Colors.black}
          />
        </TouchableOpacity>
      </View>
      {children}
      <View style={styles.button}>
        <PrimaryButton
          text={buttonTitle}
          onPress={onPress}
          style={styles.sheetButton}
        />
      </View>
    </BottomSheet>
  );
};

export default FunctionalSheet;
