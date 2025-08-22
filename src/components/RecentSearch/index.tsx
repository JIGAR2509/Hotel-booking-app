import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Colors from '../../utils/Colors/colors';
import { RecentSearchProps } from './type';
import SeperatorLine from '../SeperatorLine';

const RecentSearch = ({ data }: { data: RecentSearchProps[] }) => {
  return (
    <>
      {data.map(item => (
        <>
          <View key={item.id} style={styles.dataContainer}>
            <FontAwesomeIcon
              icon={faClock as IconProp}
              size={25}
              color={Colors.secondary}
              style={styles.icon}
            />
            <View style={styles.textContainer}>
              <Text style={styles.city}>{item.city}</Text>
              <Text
                style={styles.hotels}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {item.hotel}
              </Text>
            </View>
          </View>
          <SeperatorLine />
        </>
      ))}
    </>
  );
};

export default RecentSearch;
