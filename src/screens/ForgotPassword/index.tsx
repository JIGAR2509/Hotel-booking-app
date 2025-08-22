import { Text, View } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import PrimaryButton from '../../components/PrimaryButton';
import Input from '../../components/Input';
import { Routes } from '../../navigation/routes';
import BackButton from '../../components/BackButton';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Layout from '../../components/Layout';
import { AuthStackParams } from '../../navigation/types';
import { en } from '../../translations/en';

const ForgotPassword = () => {
  const [number, setNumber] = useState('');
  const navigation = useNavigation<NavigationProp<AuthStackParams>>();

  return (
    <Layout keyboardAvoidingView>
      <BackButton onPress={() => navigation.goBack()} />

      <View style={styles.textContainer}>
        <Text style={styles.verifyText}>{en.forgotPassword.title}</Text>
        <Text style={styles.verifyDescription}>
          {en.forgotPassword.description}
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <Input
          inputLable={en.auth.phoneNumber}
          placeholder={en.auth.enterPhoneNumber}
          value={number}
          onChangeText={setNumber}
          inputMode="numeric"
          keyboardType="number-pad"
          keyboardAppearance="dark"
          startIcon={faPhone as IconProp}
        />
      </View>

      <View style={styles.bottomContainer}>
        <PrimaryButton
          text={en.buttons.sendCode}
          onPress={() => {
            navigation.navigate(Routes.createPassword);
          }}
          style={styles.button}
        />
      </View>
    </Layout>
  );
};

export default ForgotPassword;
