import React, { useState } from 'react';
import Layout from '../../components/Layout';
import {
  faClose,
  faLocation,
  faSearch,
  faSliders,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import SearchInput from '../../components/SearchInput';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';
import hotels from '../../components/HotelFlatlist/data';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Colors from '../../utils/Colors/colors';
import { Routes } from '../../navigation/routes';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import SeperatorLine from '../../components/SeperatorLine';
import CustomHeader from '../../components/Header';
import { HomescreenParams } from '../../navigation/types';
import { en } from '../../translations/en';

const NestedSearch = () => {
  const [search, setSearch] = useState('');

  const navigation = useNavigation<NavigationProp<HomescreenParams>>();

  const relatedSearch =
    search.length > 0
      ? hotels.filter(
          hotel =>
            hotel.location.toLowerCase().includes(search.toLowerCase()) ||
            hotel.name.toLowerCase().includes(search.toLowerCase()),
        )
      : [];
  return (
    <Layout edges={['top', 'bottom']} stickyHeaderIndices={[1]} scrollable>
      <CustomHeader
        headerText={en.common.search}
        icon={faSliders as IconProp}
      />
      <View style={{ backgroundColor: Colors.white }}>
        <View style={styles.input}>
          <SearchInput
            value={search}
            startIcon={faSearch as IconProp}
            endIcon={search.length > 0 ? (faClose as IconProp) : undefined}
            onChangeText={text => setSearch(text)}
            onEndIconPress={() => setSearch('')}
          />
          <Text style={styles.related}>{en.common.relatedResult}</Text>
        </View>
      </View>
      {relatedSearch.map(item => (
        <View key={item.id}>
          <Pressable
            style={styles.searchList}
            onPress={() => {
              navigation.navigate(Routes.popularSearchScreen, {
                item,
                searchValue: search,
              });
            }}
          >
            <FontAwesomeIcon
              icon={faLocation as IconProp}
              size={35}
              color={Colors.primary}
            />
            <View style={styles.textContainer}>
              <Text style={styles.searchText}>{item.name}</Text>
              <Text style={styles.searchLocation}>{item.location}</Text>
            </View>
          </Pressable>

          <SeperatorLine />
        </View>
      ))}
    </Layout>
  );
};

export default NestedSearch;
