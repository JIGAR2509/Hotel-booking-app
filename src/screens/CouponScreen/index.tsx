import { FlatList, Text } from 'react-native';
import React from 'react';
import CustomHeader from '../../components/Header';
import styles from './styles';
import coupons from '../../components/CouponCards/data';
import CouponCard from '../../components/CouponCards';
import Layout from '../../components/Layout';
import { en } from '../../translations/en';

const CouponScreen = () => {
  return (
    <Layout backgroundColor safeAreaView edges={['bottom', 'top']}>
      <CustomHeader headerText="Coupon" style={styles.header} />
      <Text style={styles.text}>
        {coupons.length} {en.coupon.readyToUse}
      </Text>
      <FlatList
        data={coupons}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <CouponCard item={item} Extended={true} />}
        contentContainerStyle={styles.flatList}
        showsVerticalScrollIndicator={false}
      />
    </Layout>
  );
};

export default CouponScreen;
