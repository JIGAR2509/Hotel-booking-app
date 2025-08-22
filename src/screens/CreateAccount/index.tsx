import { TouchableOpacity, View } from 'react-native';
import React, { useMemo, useState } from 'react';
import styles from './styles';
import { Text } from 'react-native';
import Input from '../../components/Input';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useToast } from 'react-native-toast-notifications';
import { Routes } from '../../navigation/routes';
import BackButton from '../../components/BackButton';
import {
  faEye,
  faEyeSlash,
  faLock,
  faPhone,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { AuthStackParams } from '../../navigation/types';
import Layout from '../../components/Layout';
import Linker from '../../components/Linker';
import { en } from '../../translations/en';

const CreateAccount = () => {
  const [password, setPassword] = useState('');
  const [phoneNumber, setNumber] = useState('');
  const [username, setUsername] = useState('');
  const [visible, setVisible] = useState(false);

  const toast = useToast();
  const navigation = useNavigation<NavigationProp<AuthStackParams>>();

  const nextStep = () => {
    if (username.trim() && password && phoneNumber.trim().length >= 10) {
      navigation.navigate(Routes.verifyAccount, { phoneNumber });
    } else {
      toast.show('All fields are required ‼️', {
        type: 'warning',
        placement: 'bottom',
        duration: 4000,
        animationType: 'zoom-in',
        style: { backgroundColor: 'black' },
      });
    }
  };

  const filledButton = useMemo(
    () =>
      username.length > 0 && password.length > 0 && phoneNumber.length > 0
        ? styles.viewButton
        : styles.agreeButton,
    [password.length, phoneNumber.length, username.length],
  );

  const filledText = useMemo(
    () =>
      username.length > 0 && password.length > 0 && phoneNumber.length > 0
        ? styles.viewButtonText
        : styles.agreeButtonText,
    [password.length, phoneNumber.length, username.length],
  );

  return (
    <Layout keyboardAvoidingView edges={['top']}>
      <BackButton onPress={() => navigation.goBack()} />

      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>{en.common.welcome}</Text>
        <Text style={styles.welcomeDescription}>
          {en.auth.createAccountTitle}
        </Text>
      </View>

      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Input
            inputLable={en.auth.fullName}
            placeholder={en.auth.enterUsername}
            value={username}
            onChangeText={setUsername}
            keyboardAppearance="dark"
            startIcon={faUser as IconProp}
          />
          <Input
            inputLable={en.auth.phoneNumber}
            placeholder={en.auth.enterPhoneNumber}
            value={phoneNumber}
            onChangeText={number => {
              number.length <= 10 ? setNumber(number) : null;
            }}
            inputMode="numeric"
            keyboardType="number-pad"
            keyboardAppearance="dark"
            startIcon={faPhone as IconProp}
          />
          <Input
            inputLable={en.auth.password}
            placeholder={en.auth.enterPassword}
            secureTextEntry={!visible}
            value={password}
            onChangeText={setPassword}
            keyboardAppearance="dark"
            startIcon={faLock as IconProp}
            endIcon={visible ? (faEyeSlash as IconProp) : (faEye as IconProp)}
            onEndIconPress={() => setVisible(!visible)}
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={filledButton} onPress={nextStep}>
          <Text style={filledText}>{en.auth.agreeContinue}</Text>
        </TouchableOpacity>

        <Linker
          question={en.auth.haveAccount}
          text={en.buttons.login}
          onPress={() => navigation.navigate(Routes.login)}
        />
      </View>
    </Layout>
  );
};

export default CreateAccount;
