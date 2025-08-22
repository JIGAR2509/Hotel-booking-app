import {
  Image,
  ImageProps,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus, faCheck } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import paymentOptions from './data';
import Colors from '../../utils/Colors/colors';
import { en } from '../../translations/en';

const PaymentOption = () => {
  const [selectedMethod, setSelectedMethod] = useState<string>('mastercard');

  const renderCheckBox = (isSelected: boolean) => (
    <View style={[styles.checkbox, isSelected && styles.checkboxSelected]}>
      {isSelected && (
        <FontAwesomeIcon
          icon={faCheck as IconProp}
          size={15}
          color={Colors.white}
        />
      )}
    </View>
  );

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {paymentOptions.map(option => (
        <TouchableOpacity
          key={option.key}
          style={styles.optionButton}
          onPress={() => setSelectedMethod(option.key)}
        >
          <View style={styles.inner}>
            <Image source={option.icon as ImageProps} style={styles.image} />
            <Text style={styles.label}>{option.label}</Text>
          </View>
          {renderCheckBox(selectedMethod === option.key)}
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.addCard}>
        <View style={styles.upperBox}>
          <View style={styles.iconBox}>
            <FontAwesomeIcon
              icon={faPlus as IconProp}
              color={Colors.white}
              size={13}
            />
          </View>
        </View>

        <Text style={styles.addCardText}>{en.addDebitCard}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PaymentOption;
