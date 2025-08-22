import { FlatList, Text, View } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import SecondaryButton from '../../components/SecondaryButton';
import { notificationData } from '../../components/Notification/data';
import CustomHeader from '../../components/Header';
import Notifications from '../../components/Notification';
import SeperatorLine from '../../components/SeperatorLine';
import { Routes } from '../../navigation/routes';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Layout from '../../components/Layout';
import { HomescreenParams } from '../../navigation/types';
import { en } from '../../translations/en';

const NotificationScreen = () => {
  const [pendingMessage, setPendingMessage] = useState(true);
  const navigation = useNavigation<NavigationProp<HomescreenParams>>();
  const handleRead = () => setPendingMessage(false);

  const renderSeperator = () => <SeperatorLine />;
  return (
    <Layout safeAreaView>
      <CustomHeader
        headerText={en.common.notification}
        icon={faGear as IconProp}
        onEndIconPress={() => {
          navigation.navigate(Routes.notificationSettingScreen);
        }}
      />
      <View style={styles.recentContainer}>
        <View style={styles.texts}>
          <Text style={styles.recent}>{en.notification.recent}</Text>
          {pendingMessage && (
            <Text style={styles.length}>{notificationData.length}</Text>
          )}
        </View>
        <SecondaryButton text={en.buttons.markAllRead} onPress={handleRead} />
      </View>

      <View style={styles.flatListContainer}>
        <FlatList
          data={notificationData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Notifications item={item} />}
          ItemSeparatorComponent={renderSeperator}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Layout>
  );
};

export default NotificationScreen;
