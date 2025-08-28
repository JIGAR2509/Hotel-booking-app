import { Text, View } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import Input from '../../components/Input';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import PrimaryButton from '../../components/PrimaryButton';
import { Routes } from '../../navigation/routes';
import BackButton from '../../components/BackButton';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { AuthStackParams } from '../../navigation/types';
import Layout from '../../components/Layout';
import FormCompleteSheet from '../../components/FormCompleteSheet';
import Images from '../../utils/Images/images';
import Linker from '../../components/Linker';
import { en } from '../../translations/en';

const VerifyAccount = ({}) => {
  const [otp, setOtp] = useState('5392');
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const navigation = useNavigation<NavigationProp<AuthStackParams>>();

  const route = useRoute<RouteProp<AuthStackParams>>();

  const finalStep = () => {
    setIsSheetOpen(true);
  };

  return (
    <Layout safeAreaView>
      <BackButton onPress={() => navigation.goBack()} />
      <View style={styles.textContainer}>
        <Text style={styles.verifyText}>{en.verification.title}</Text>
        <View style={styles.numberContainer}>
          <Text style={styles.verifyDescription}>
            {en.verification.sendVerification}
          </Text>
          <Text style={styles.number}>{route.params?.phoneNumber}</Text>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Input
          inputLable={en.verification.verificationCode}
          placeholder={en.auth.enterUsername}
          value={otp}
          onChangeText={setOtp}
          keyboardAppearance="dark"
          startIcon={faMessage as IconProp}
          endText={`${en.verification.resendIn} 2:14`}
        />
      </View>
      <View style={styles.bottomContainer}>
        <PrimaryButton
          text={en.buttons.verifyAccount}
          onPress={finalStep}
          style={styles.button}
        />
        <Linker
          question={en.verification.didntReceiveCode}
          text={en.verification.resend}
        />
      </View>
      <FormCompleteSheet
        sheetHeight={600}
        image={Images.created}
        title={en.success.title}
        description={en.success.description}
        isOpen={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
        buttonText={en.buttons.login}
        onPress={() => {
          setIsSheetOpen(false);
          navigation.navigate(Routes.login);
        }}
      />
    </Layout>
  );
};

export default VerifyAccount;
