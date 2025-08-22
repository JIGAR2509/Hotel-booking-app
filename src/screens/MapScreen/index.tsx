import {
  FlatList,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  View,
} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import BackButton from '../../components/BackButton';
import SearchInput from '../../components/SearchInput';
import { faSearch, faSliders } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import hotels from '../../components/HotelFlatlist/data';
import HotelLabel from '../../components/HotelLabel';
import { MainStackParams } from '../../navigation/types';
import { en } from '../../translations/en';

const MapScreen = () => {
  const [search, setSearch] = useState('');
  const [filteredSearch, setFilteredSearch] = useState(hotels);
  const navigation = useNavigation<NavigationProp<MainStackParams>>();

  const mapSearchHandler = (text: string) => {
    setSearch(text);
    if (text.trim().length > 0) {
      const results = hotels.filter(
        hotel =>
          hotel.location.toLowerCase().includes(text.toLowerCase()) ||
          hotel.name.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredSearch(results);
    } else {
      setFilteredSearch(hotels);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? -40 : -30}
    >
      <ImageBackground
        source={require('/Users/sky9two/Desktop/Project/HotelBooking/src/assets/images/map.png')}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.header}>
          <BackButton
            onPress={() => navigation.goBack()}
            ExtraStyle={styles.backButton}
          />
          <SearchInput
            placeholder={en.home.searchForPlace}
            startIcon={faSearch as IconProp}
            endIcon={faSliders as IconProp}
            value={search}
            onChangeText={mapSearchHandler}
            extraStyle={styles.input}
          />
        </View>
        <Pressable style={styles.listContainer}>
          <FlatList
            data={filteredSearch}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <HotelLabel item={item} style={styles.label} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatList}
          />
        </Pressable>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default MapScreen;
