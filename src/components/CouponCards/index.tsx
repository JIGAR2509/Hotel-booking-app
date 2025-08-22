import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Colors from '../../utils/Colors/colors';
import { CouponProps } from './type';
import SeperatorLine from '../SeperatorLine';
import PrimaryButton from '../PrimaryButton';
import { en } from '../../translations/en';

export type CouponCardProps = {
  item: CouponProps;
  selected?: string;
  onSelect?: (id: string) => void;
  Extended?: boolean;
};

const CouponCard = ({
  item,
  selected,
  onSelect,
  Extended,
}: CouponCardProps) => {
  return (
    <Pressable
      style={[styles.container, selected === item.id && styles.activeBorder]}
      onPress={() => onSelect?.(item.id)}
    >
      <View style={styles.upperContainer}>
        <View style={styles.innerContainer}>
          <FontAwesomeIcon
            icon={faMoneyCheckAlt as IconProp}
            color={Colors.primary}
            size={34}
          />
          <View style={styles.textContainer}>
            <Text style={styles.discountText}>{item.discount}</Text>
            <View style={styles.bottomContainer}>
              <Text style={styles.expiry}>{item.expiry}</Text>
              <TouchableOpacity>
                <Text style={styles.buttonText}>{en.buttons.seeAll}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {selected === item.id && (
          <FontAwesomeIcon
            icon={faCheck as IconProp}
            size={16}
            color={Colors.primary}
          />
        )}
      </View>

      {Extended && (
        <>
          <SeperatorLine />
          <View style={styles.extendedContainer}>
            <View style={styles.voucherBox}>
              <Text style={styles.codeText}>{en.voucherCode}</Text>
              <Text style={styles.code}>{item.voucherCode}</Text>
            </View>
            <PrimaryButton text={en.buttons.use} style={styles.button} />
          </View>
        </>
      )}
    </Pressable>
  );
};

export default CouponCard;
