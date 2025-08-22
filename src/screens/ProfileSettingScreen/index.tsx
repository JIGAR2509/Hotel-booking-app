import { Image, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Layout from '../../components/Layout';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera, faUser } from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Colors from '../../utils/Colors/colors';
import Input from '../../components/Input';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import PrimaryButton from '../../components/PrimaryButton';
import SecondaryButton from '../../components/SecondaryButton';
import { Routes } from '../../navigation/routes';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useToast } from 'react-native-toast-notifications';
import CustomHeader from '../../components/Header';
import { AuthStackParams } from '../../navigation/types';
import { en } from '../../translations/en';

const ProfileSettingScreen = () => {
  const [username, setUsername] = useState('Marrine Gustav');
  const [number, setNumber] = useState('+62 1283972849');

  const navigation = useNavigation<NavigationProp<AuthStackParams>>();
  const toast = useToast();

  const saveHandler = () => {
    navigation.goBack();
    toast.show(en.toast.profileUpdateSuccess);
  };
  return (
    <Layout backgroundColor scrollable>
      <CustomHeader headerText={en.common.myProfile} style={styles.header} />
      <View style={styles.profilePicture}>
        <Image
          source={require('/Users/sky9two/Desktop/Project/HotelBooking/src/assets/images/profilephoto.jpg')}
          style={styles.image}
        />
        <TouchableOpacity style={styles.icon}>
          <FontAwesomeIcon
            icon={faCamera as IconProp}
            size={25}
            color={Colors.white}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Input
          value={username}
          onChangeText={setUsername}
          inputLable={en.auth.fullName}
          startIcon={faUser as IconProp}
          viewStyle={styles.input}
        />
        <Input
          value={number}
          onChangeText={setNumber}
          inputLable={en.auth.phoneNumber}
          startIcon={faPhone as IconProp}
          keyboardType="numeric"
          viewStyle={styles.input}
        />
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          text={en.buttons.saveChanges}
          onPress={saveHandler}
          style={styles.button}
        />
        <SecondaryButton
          text={`${en.buttons.changePassword}${en.common.questionMark}`}
          onPress={() => navigation.navigate(Routes.createPassword)}
        />
      </View>
    </Layout>
  );
};

export default ProfileSettingScreen;
