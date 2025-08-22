import React from 'react';
import CustomHeader from '../../components/Header';
import styles from './styles';
import { FlatList, Text, View } from 'react-native';
import Layout from '../../components/Layout';
import bookingTransactions from '../../components/TransactionCard/data';
import TransactionCard from '../../components/TransactionCard';
import { en } from '../../translations/en';

const TransactionScreen = () => {
  const waitingList = bookingTransactions.filter(
    current => current.status === 'Waiting',
  );
  const finishedList = bookingTransactions.filter(
    current => current.status === 'Finished',
  );
  return (
    <Layout backgroundColor scrollable>
      <CustomHeader
        headerText={en.common.transactionHistory}
        style={styles.header}
      />
      <View style={styles.bookingList}>
        <Text style={styles.transactionsHeader}>
          {en.transaction.myBookings}
        </Text>
        <FlatList
          data={waitingList}
          renderItem={({ item }) => <TransactionCard item={item} />}
          contentContainerStyle={styles.list}
        />
      </View>
      <View style={styles.bookingList}>
        <Text style={styles.transactionsHeader}>
          {en.transaction.pastTransactions}
        </Text>
        <FlatList
          data={finishedList}
          renderItem={({ item }) => <TransactionCard item={item} />}
          contentContainerStyle={styles.list}
        />
      </View>
    </Layout>
  );
};

export default TransactionScreen;
