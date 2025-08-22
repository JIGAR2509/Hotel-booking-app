import { Text, View } from 'react-native';
import React, { useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigation/routes';
import styles from './styles';
import Input from '../../components/Input';
import PrimaryButton from '../../components/PrimaryButton';
import BackButton from '../../components/BackButton';
import { faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Layout from '../../components/Layout';
import FormCompleteSheet from '../../components/FormCompleteSheet';
import Images from '../../utils/Images/images';
import { MainStackParams } from '../../navigation/types';
import { en } from '../../translations/en';
import { useToast } from 'react-native-toast-notifications';

const CreatePassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const navigation = useNavigation<NavigationProp<MainStackParams>>();
  const toast = useToast();

  const changePassword = () => {
    if (password !== confirmPassword) {
      toast.show(en.toast.passwordsAreNotSame, {
        placement: 'top',
        animationType: 'slide-in',
        duration: 2000,
        style: {
          padding: 5,
          borderRadius: 20,
        },
      });
    } else {
      setIsSheetOpen(true);
    }
  };

  return (
    <Layout scrollable>
      <BackButton onPress={() => navigation.goBack()} />

      <View style={styles.textContainer}>
        <Text style={styles.text}>{en.newPassword.title}</Text>
        <Text style={styles.description}>{en.newPassword.description}</Text>
      </View>

      <View style={styles.inputContainer}>
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
        <Input
          inputLable={en.newPassword.confirmPassword}
          placeholder={en.newPassword.enterConfirmPassword}
          secureTextEntry={!visible}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          keyboardAppearance="dark"
          startIcon={faLock as IconProp}
          endIcon={visible ? (faEyeSlash as IconProp) : (faEye as IconProp)}
          onEndIconPress={() => setVisible(!visible)}
        />
      </View>

      <View style={styles.bottomContainer}>
        <PrimaryButton
          text={en.buttons.resetPassword}
          style={styles.button}
          onPress={changePassword}
        />
      </View>

      <FormCompleteSheet
        isOpen={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
        image={Images.created}
        title={en.success.passwordChangedTitle}
        description={en.success.passwordChangedDesc}
        buttonText={en.buttons.login}
        onPress={() => {
          setIsSheetOpen(false);
          navigation.navigate(Routes.authStack, { screen: Routes.login });
        }}
      />
    </Layout>
  );
};

export default CreatePassword;
