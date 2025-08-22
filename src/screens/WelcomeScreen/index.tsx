import { Text, View } from 'react-native';
import React from 'react';
import PrimaryButton from '../../components/PrimaryButton';
import styles from './styles';
import SecondaryButton from '../../components/SecondaryButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigation/routes';
import { AuthStackParams } from '../../navigation/types';
import { en } from '../../translations/en';
import Layout from '../../components/Layout';

const WelcomeScreen = () => {
  const navigation = useNavigation<NavigationProp<AuthStackParams>>();
  return (
    <Layout style={styles.container} safeAreaView>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{en.common.welcome}</Text>
        <Text style={styles.descriptionText}>
          {en.onboarding.welcomeScreen.description}
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <PrimaryButton
          text={en.buttons.createAccount}
          onPress={() => {
            navigation.navigate(Routes.createAccount);
          }}
          style={styles.button}
        />
        <SecondaryButton
          text={en.buttons.login}
          onPress={() => {
            navigation.navigate(Routes.login);
          }}
        />
      </View>
    </Layout>
  );
};

export default WelcomeScreen;
