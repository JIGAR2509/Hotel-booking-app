import { View } from 'react-native';
import React from 'react';
import Layout from '../../components/Layout';
import styles from './styles';
import SeperatorLine from '../../components/SeperatorLine';
import CustomHeader from '../../components/Header';
import CustomSwitch from '../../components/Switch';
import { en } from '../../translations/en';

const NotificationSettingScreen = () => {
  return (
    <Layout safeAreaView>
      <CustomHeader
        headerText={en.common.notificationSettings}
        style={styles.header}
      />
      <View style={styles.notificationSettings}>
        <CustomSwitch
          title={en.notificationSettings.newsletter}
          description={en.notificationSettings.alertsForThe}
        />
        <SeperatorLine />
        <CustomSwitch
          title={en.notificationSettings.recommendation}
          description={en.notificationSettings.getInfoNewest}
        />
        <SeperatorLine />
        <CustomSwitch
          title={en.notificationSettings.invoicePayment}
          description={en.notificationSettings.informationAboutYour}
        />
      </View>
    </Layout>
  );
};

export default NotificationSettingScreen;
