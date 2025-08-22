import React, { useState } from 'react';
import Layout from '../../components/Layout';
import ScreenHeader from '../../components/ScreenHeader';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigation/routes';
import { faBarsStaggered, faSearch } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import SearchInput from '../../components/SearchInput';
import styles from './styles';
import hotels from '../../components/HotelFlatlist/data';
import SecondaryButton from '../../components/SecondaryButton';
import recentSearches from '../../components/RecentSearch/data';
import RecentSearch from '../../components/RecentSearch';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import RecentHotelCard from '../../components/RecentHotelCard';
import { HomescreenParams } from '../../navigation/types';
import { en } from '../../translations/en';

const SearchScreen = () => {
  const navigation = useNavigation<NavigationProp<HomescreenParams>>();
  const [search, setSearch] = useState('');
  const [showRecent, setShowRecent] = useState(true);
  const [recentData, setRecentData] = useState(recentSearches);

  const handleClearPress = () => {
    if (showRecent) {
      setRecentData([]);
    } else {
      setRecentData(recentSearches);
    }
    setShowRecent(!showRecent);
  };

  return (
    <Layout edges={['top']} keyboardAvoidingView>
      <ScreenHeader
        title={en.common.search}
        icon={faBell as IconProp}
        onIconPress={() => {
          navigation.navigate(Routes.notification);
        }}
        dot={true}
      />
      <TouchableOpacity
        style={styles.search}
        onPress={() => navigation.navigate(Routes.nestedSearchScreen)}
      >
        <SearchInput
          startIcon={faSearch as IconProp}
          placeholder={en.hotel.searchHotel}
          endIcon={faBarsStaggered as IconProp}
          value={search}
          editable={false}
          onChangeText={text => setSearch(text)}
          onEndIconPress={() => {
            navigation.navigate(Routes.popularSearchScreen, {
              searchValue: '',
            });
          }}
        />
      </TouchableOpacity>
      <View style={styles.recent}>
        <Text style={styles.recentText}>{en.search.recentSearches}</Text>
        <TouchableOpacity onPress={handleClearPress}>
          <Text style={styles.clearButton}>
            {showRecent ? en.buttons.clearAll : en.buttons.undo}
          </Text>
        </TouchableOpacity>
      </View>
      {recentData.length > 0 ? (
        <RecentSearch data={recentSearches} />
      ) : (
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleText}>{en.search.noRecentSearches}</Text>
        </View>
      )}
      <View style={styles.bottomInner}>
        <Text style={styles.bottomText}>{en.search.recentlyViewed}</Text>
        <SecondaryButton
          text={en.buttons.seeAll}
          onPress={() => {
            navigation.navigate(Routes.popularSearchScreen, {
              searchValue: '',
            });
          }}
        />
      </View>
      <FlatList
        data={hotels}
        keyExtractor={item => item.id.toString()}
        horizontal
        renderItem={({ item }) => <RecentHotelCard item={item} />}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        style={styles.flatlist}
      />
    </Layout>
  );
};

export default SearchScreen;
