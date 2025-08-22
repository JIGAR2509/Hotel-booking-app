import { Text, View } from 'react-native';
import React from 'react';
import Layout from '../../components/Layout';
import styles from './styles';
import OptionBox from '../../components/OptionBox';
import { faUser } from '@fortawesome/free-regular-svg-icons/faUser';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons/faGreaterThan';
import { faBell } from '@fortawesome/free-regular-svg-icons/faBell';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { faMoneyBill1, faMoon } from '@fortawesome/free-regular-svg-icons';
import { faEarth, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { Routes } from '../../navigation/routes';
import Colors from '../../utils/Colors/colors';
import { useToast } from 'react-native-toast-notifications';
import { HomescreenParams, MainStackParams } from '../../navigation/types';
import { en } from '../../translations/en';
import CustomHeader from '../../components/Header';

const SettingScreen = () => {
  const navigation =
    useNavigation<NavigationProp<MainStackParams & HomescreenParams>>();
  const toast = useToast();

  const logoutHandler = () => {
    toast.show(en.toast.loggingOut, {
      duration: 2000,
      type: 'success',
      style: {
        backgroundColor: Colors.red,
        borderColor: Colors.black,
        borderBottomWidth: 2,
        paddingHorizontal: 20,
      },
      textStyle: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: 500,
      },
    });

    setTimeout(() => {
      navigation.navigate(Routes.authStack, { screen: Routes.login });
      toast.show(en.toast.logoutSuccess, {
        duration: 2000,
        type: 'success',
        textStyle: {
          color: Colors.white,
          fontSize: 16,
          fontWeight: 500,
        },
      });
    }, 2000);
  };

  return (
    <Layout backgroundColor scrollable>
      <CustomHeader headerText={en.common.settings} style={styles.header} />
      <Text style={styles.sectionText}>
        {en.setting.sections.accountSettings}
      </Text>
      <View style={styles.sectionBoxes}>
        <OptionBox
          startIcon={faUser as IconProp}
          title={en.setting.options.profile}
          endIcon={faGreaterThan as IconProp}
          onPress={() => navigation.navigate(Routes.profileSettingScreen)}
        />
        <OptionBox
          startIcon={faBell as IconProp}
          title={en.setting.options.notifications}
          endIcon={faGreaterThan as IconProp}
          onPress={() => navigation.navigate(Routes.notificationSettingScreen)}
        />
        <OptionBox
          startIcon={faMoneyBill1 as IconProp}
          title={en.setting.options.paymentsAndPayouts}
          endIcon={faGreaterThan as IconProp}
        />
      </View>
      <Text style={styles.sectionText}>{en.setting.sections.preferences}</Text>
      <View style={styles.sectionBoxes}>
        <OptionBox
          startIcon={faEarth as IconProp}
          title={en.setting.options.language}
          endIcon={faGreaterThan as IconProp}
          endText={en.setting.extras.languageDefault}
          onPress={() => navigation.navigate(Routes.laguageScreen)}
        />
        <OptionBox
          startIcon={faMoon as IconProp}
          title={en.setting.options.darkMode}
          switchShow={true}
        />
        <OptionBox
          startIcon={faLock as IconProp}
          title={en.setting.options.privacySettings}
          endIcon={faGreaterThan as IconProp}
        />
        <OptionBox
          startIcon={faSignOut as IconProp}
          title={en.common.logout}
          textColor={Colors.red}
          iconColor={Colors.red}
          onPress={logoutHandler}
        />
      </View>
    </Layout>
  );
};

export default SettingScreen;
