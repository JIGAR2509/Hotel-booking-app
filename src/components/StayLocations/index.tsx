import { ScrollView, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';

type LocationData = {
  key: number;
  name: string;
};

const categories: LocationData[] = [
  { key: 1, name: 'Hotel' },
  { key: 2, name: 'Apartment' },
  { key: 3, name: 'Motel' },
  { key: 4, name: 'House' },
  { key: 5, name: 'Flat' },
  { key: 6, name: 'ClubHouse' },
];

const StayLocations = () => {
  const [category, setCategory] = useState<string>('Hotel');

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      {categories.map(item => (
        <TouchableOpacity
          key={item.key}
          style={[styles.button, category === item.name && styles.activeButton]}
          onPress={() => {
            setCategory(item.name);
          }}
        >
          <Text
            style={[
              styles.buttonText,
              category === item.name && styles.activeButtonText,
            ]}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default StayLocations;
