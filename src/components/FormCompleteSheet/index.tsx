import { Image, ImageProps, Text, View } from 'react-native';
import React from 'react';
import styles from './styles';
import BottomSheet from '../BottomSheet';
import PrimaryButton from '../PrimaryButton';
import Colors from '../../utils/Colors/colors';

export type FormCompleteSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
  description: string;
  buttonText: string;
  onPress?: () => void;
};

const FormCompleteSheet = ({
  isOpen,
  onClose,
  image,
  title,
  description,
  onPress,
  buttonText,
}: FormCompleteSheetProps) => {
  return (
    <BottomSheet
      isOpen={isOpen}
      onClose={onClose}
      backGroundColor={Colors.white}
    >
      <View>
        <Image source={image as ImageProps} style={styles.img} />
        <View style={styles.innerConatiner}>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
      <View style={styles.sheetButton}>
        <PrimaryButton
          text={buttonText}
          onPress={onPress}
          style={styles.button}
        />
      </View>
    </BottomSheet>
  );
};

export default FormCompleteSheet;
