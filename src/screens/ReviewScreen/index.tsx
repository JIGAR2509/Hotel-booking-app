/* eslint-disable @typescript-eslint/no-shadow */
import { FlatList } from 'react-native';
import React from 'react';
import styles from './styles';
import { faListDots } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { reviewData } from '../../components/ReviewPerson/data';
import HotelLabel from '../../components/HotelLabel';
import { RouteProp, useRoute } from '@react-navigation/native';
import { HomescreenParams } from '../../navigation/types';
import CustomHeader from '../../components/Header';
import ReviewPerson from '../../components/ReviewPerson';
import SeperatorLine from '../../components/SeperatorLine';
import Layout from '../../components/Layout';
import { en } from '../../translations/en';

const ReviewScreen = () => {
  const route = useRoute<RouteProp<HomescreenParams, 'reviewScreen'>>();
  const { item } = route.params;

  const renderSeperator = () => <SeperatorLine />;
  return (
    <Layout safeAreaView style={styles.container}>
      <CustomHeader
        headerText={en.common.reviews}
        icon={faListDots as IconProp}
      />
      <HotelLabel item={item} disabled />
      <FlatList
        data={reviewData}
        keyExtractor={key => key.id}
        renderItem={({ item }) => <ReviewPerson item={item} />}
        ItemSeparatorComponent={renderSeperator}
        contentContainerStyle={styles.flatList}
        showsVerticalScrollIndicator={false}
      />
    </Layout>
  );
};

export default ReviewScreen;
