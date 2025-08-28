import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faBars,
  faMagnifyingGlass,
  faSliders,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigation/routes';
import Input from '../../components/Input';
import StayLocations from '../../components/StayLocations';
import hotels from '../../components/HotelFlatlist/data';
import HotelFlatlist from '../../components/HotelFlatlist';
import PopularHotelsFlatlist from '../../components/PopularFlatlist';
import Layout from '../../components/Layout';
import Colors from '../../utils/Colors/colors';
import { HomescreenParams } from '../../navigation/types';
import { en } from '../../translations/en';
import { hotelImagePairs } from '../../components/PopularFlatlist/data';
const HomeScreen = () => {
  const [search, setSearch] = useState('');

  const searchHotels = hotels.filter(hotel =>
    hotel.name.toLowerCase().includes(search.toLowerCase()),
  );

  const navigation = useNavigation<NavigationProp<HomescreenParams>>();
  return (
    <Layout keyboardAvoidingView edges={['top']} stickyHeaderIndices={[1]}>
      <View style={styles.upperContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(Routes.notification);
            }}
          >
            <FontAwesomeIcon
              icon={faBars as IconProp}
              color={Colors.black}
              size={30}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(Routes.profileScreen);
            }}
          >
            <Image
              source={require('/Users/sky9two/Desktop/Project/HotelBooking/src/assets/images/profilephoto.jpg')}
              style={styles.headerImage}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerText}>{en.home.headerText}</Text>
      </View>
      <View style={styles.headerInner}>
        <View style={styles.searchBar}>
          <Input
            placeholder={en.home.searchForPlace}
            value={search}
            onChangeText={setSearch}
            keyboardAppearance="dark"
            startIcon={faMagnifyingGlass as IconProp}
            viewStyle={styles.input}
          />
          <TouchableOpacity
            style={styles.searchIcon}
            onPress={() => navigation.navigate(Routes.apiScreen)}
          >
            <FontAwesomeIcon
              icon={faSliders as IconProp}
              size={20}
              color={Colors.white}
            />
          </TouchableOpacity>
        </View>
        <StayLocations />
      </View>
      <FlatList
        data={searchHotels}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <HotelFlatlist item={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomTitle}>{en.home.popularHotels}</Text>
        <FlatList
          data={hotelImagePairs}
          keyExtractor={item => item.key}
          renderItem={({ item }) => <PopularHotelsFlatlist item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </Layout>
  );
};

export default HomeScreen;
