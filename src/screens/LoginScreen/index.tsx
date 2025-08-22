import { Image, Linking, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import Input from '../../components/Input';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import SecondaryButton from '../../components/SecondaryButton';
import PrimaryButton from '../../components/PrimaryButton';
import Icons from '../../utils/Icons/icons';
import { Routes } from '../../navigation/routes';

import BackButton from '../../components/BackButton';
import {
  faEye,
  faEyeSlash,
  faLock,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Layout from '../../components/Layout';
import Linker from '../../components/Linker';
import { AuthStackParams, MainStackParams } from '../../navigation/types';
import { en } from '../../translations/en';
import Colors from '../../utils/Colors/colors';

const LoginScreen = () => {
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [visible, setVisible] = useState(true);
  const navigation =
    useNavigation<NavigationProp<AuthStackParams & MainStackParams>>();

  return (
    <Layout keyboardAvoidingView>
      <BackButton onPress={() => navigation.navigate(Routes.welcome)} />
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>{en.common.welcome}</Text>
        <Text style={styles.welcomeDescription}>{en.login.description}</Text>
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
        <View style={styles.forgotButton}>
          <SecondaryButton
            text={en.auth.forgotPassword}
            onPress={() => {
              navigation.navigate(Routes.forgotPassword);
            }}
          />
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <PrimaryButton
          text={en.buttons.login}
          onPress={() => {
            navigation.navigate(Routes.homeNavigation);
          }}
          style={styles.button}
        />
        <Text style={styles.optionText}>{en.login.orLoginWith}</Text>
        <View style={styles.socialMediaContainer}>
          <TouchableOpacity
            style={[
              styles.socialMediaButton,
              { backgroundColor: Colors.white },
            ]}
            onPress={() =>
              Linking.openURL(
                'https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Fpli%3D1&ec=GAlAwAE&hl=en&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-2011029877%3A1755857755151751',
              )
            }
          >
            <Image source={Icons.Google} style={styles.buttonIcon} />
            <Text style={styles.googleIconText}>{en.buttons.google}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.socialMediaButton,
              { backgroundColor: Colors.facebookColor },
            ]}
            onPress={() => Linking.openURL('https://www.facebook.com/?_rdr')}
          >
            <Image source={Icons.Facebook} style={styles.buttonIcon} />
            <Text style={styles.facebookIconText}>{en.buttons.facebook}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Linker
        question={en.login.dontHaveAccount}
        text={en.auth.registerHere}
        onPress={() => navigation.navigate(Routes.createAccount)}
      />
    </Layout>
  );
};

export default LoginScreen;
