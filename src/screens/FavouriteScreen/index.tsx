import React from 'react';
import CustomHeader from '../../components/Header';
import styles from './style';
import { FlatList, Text } from 'react-native';
import hotels from '../../components/HotelFlatlist/data';
import HotelLabel from '../../components/HotelLabel';
import { en } from '../../translations/en';
import Layout from '../../components/Layout';

const FavouriteScreen = () => {
  return (
    <Layout safeAreaView edges={['bottom', 'top']} backgroundColor>
      <CustomHeader headerText={en.common.favourite} style={styles.header} />
      <Text style={styles.text}>
        {hotels.length} {en.favouriteItems}
      </Text>
      <FlatList
        data={hotels}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <HotelLabel item={item} />}
        contentContainerStyle={styles.flatList}
        showsVerticalScrollIndicator={false}
      />
    </Layout>
  );
};

export default FavouriteScreen;
