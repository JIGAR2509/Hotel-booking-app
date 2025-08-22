/* eslint-disable @typescript-eslint/no-shadow */
import { Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import HotelLabel from '../../components/HotelLabel';
import {
  faArrowDownWideShort,
  faCalendar,
  faListDots,
  faMoneyCheckAlt,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Input from '../../components/Input';
import { faUserAlt } from '@fortawesome/free-regular-svg-icons';
import { Routes } from '../../navigation/routes';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { HomescreenParams } from '../../navigation/types';
import PrimaryButton from '../../components/PrimaryButton';
import FunctionalSheet from '../../components/FunctionalSheet';
import PersonSelector from '../../components/PersonSelector';
import Layout from '../../components/Layout';
import { useToast } from 'react-native-toast-notifications';
import { FlatList } from 'react-native-gesture-handler';
import coupons from '../../components/CouponCards/data';
import FormCompleteSheet from '../../components/FormCompleteSheet';
import Images from '../../utils/Images/images';
import CouponCard from '../../components/CouponCards';
import SeperatorLine from '../../components/SeperatorLine';
import CustomHeader from '../../components/Header';
import PaymentOption from '../../components/PaymentSelector';
import Colors from '../../utils/Colors/colors';
import { en } from '../../translations/en';

const CheckOutScreen = () => {
  const navigation = useNavigation<any | NavigationProp<HomescreenParams>>();
  const toast = useToast();
  const route = useRoute<RouteProp<HomescreenParams, 'checkOutScreen'>>();
  const { item, dates } = route.params;

  const [dateInput, setDateInput] = useState('');
  const [guestInput, setGuestInput] = useState('');
  const [promoInput, setPromoInput] = useState('');
  const [room, setRoom] = useState(0);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [selectedCoupon, setSelectedCoupon] = useState<string>('');
  const [isPersonSheetOpen, setIsPersonSheetOpen] = useState(false);
  const [isCouponSheetOpen, setIsCouponSheetOpen] = useState(false);
  const [isFormCompleteSheetOpen, setIsFormCompleteSheetOpen] = useState(false);
  const [isPaymentSheetOpen, setIsPaymentSheetOpen] = useState(false);

  const confirmHandler = () => {
    setIsPaymentSheetOpen(false);
    toast.show(en.toast.processing, {
      type: 'success',
      duration: 3000,
      placement: 'bottom',
      animationType: 'slide-in',
    });
    setTimeout(() => {
      setIsFormCompleteSheetOpen(true);
    }, 3000);
  };

  const closeHandler = () => {
    setIsFormCompleteSheetOpen(false);
    toast.show(en.toast.checkMoreHotels, {
      type: 'success',
      duration: 3000,
      placement: 'bottom',
      animationType: 'slide-in',
    });
    navigation.replace(Routes.appStack, { screen: Routes.homeScreen });
  };

  const saveHandler = () => {
    setIsPersonSheetOpen(false);
    setGuestInput(
      `${adults + children} ${en.checkOut.guests} ${room} ${en.checkOut.room}`,
    );
  };

  useEffect(() => {
    if (dates) {
      setDateInput(dates);
    }
  }, [dates]);

  return (
    <Layout scrollable edges={['top', 'bottom']}>
      <CustomHeader
        headerText={en.common.checkOut}
        icon={faListDots as IconProp}
      />
      <View style={styles.label}>
        <HotelLabel item={item} disabled />
      </View>
      <View style={styles.filterContainer}>
        <Input
          value={dateInput}
          onChangeText={setDateInput}
          inputLable={en.checkOut.dates}
          endIcon={faArrowDownWideShort as IconProp}
          startIcon={faCalendar as IconProp}
          onEndIconPress={() => {
            navigation.navigate(Routes.calendarScreen, { item });
          }}
          editable={false}
        />
        <Input
          value={guestInput}
          onChangeText={setGuestInput}
          inputLable={en.checkOut.guests}
          endIcon={faArrowDownWideShort as IconProp}
          startIcon={faUserAlt as IconProp}
          onEndIconPress={() => {
            setIsPersonSheetOpen(true);
          }}
          editable={false}
        />
        <Input
          value={promoInput}
          onChangeText={setPromoInput}
          inputLable={en.checkOut.promo}
          endIcon={faArrowDownWideShort as IconProp}
          startIcon={faMoneyCheckAlt as IconProp}
          onEndIconPress={() => {
            setIsCouponSheetOpen(true);
          }}
          editable={false}
        />
      </View>
      <SeperatorLine style={styles.seperator} />
      <View style={styles.textContainer}>
        <Text style={styles.detailsText}>{en.checkOut.paymentDetails}</Text>
        <View style={styles.innerTexts}>
          <Text style={styles.text}>
            {en.common.$}
            {item.pricePerNight} x {en.checkOut.numberNights}
          </Text>
          <Text style={styles.text}>
            {en.common.$}
            {item.pricePerNight * 3}
          </Text>
        </View>
        <View style={styles.innerTexts}>
          <Text style={styles.text}>{en.checkOut.cleaningFee}</Text>
          <Text style={styles.text}>{en.common.$}8</Text>
        </View>
        <View style={styles.total}>
          <Text style={styles.totalText}>{en.checkOut.totalUsd}</Text>
          <Text style={styles.totalText}>
            {en.common.$}
            {item.pricePerNight * 3 + 8}
          </Text>
        </View>
        <View style={styles.bottomButton}>
          <PrimaryButton
            text={en.buttons.selectPayment}
            onPress={() => {
              setIsPaymentSheetOpen(true);
            }}
            style={styles.button}
          />
        </View>
      </View>
      <FunctionalSheet
        isOpen={isPersonSheetOpen}
        onClose={() => setIsPersonSheetOpen(false)}
        title={en.sheetHeaders.roomAndGuests}
        buttonTitle={en.buttons.save}
        onPress={saveHandler}
        backGroundColor={Colors.white}
        sheetHeight={460}
      >
        <View style={styles.personSheet}>
          <PersonSelector
            title={en.checkOut.room}
            condition={en.checkOut.roomCondition}
            value={room}
            setValue={setRoom}
          />
          <SeperatorLine />
          <PersonSelector
            title={en.checkOut.adults}
            condition={en.checkOut.adultsCondition}
            value={adults}
            setValue={setAdults}
          />
          <SeperatorLine />
          <PersonSelector
            title={en.checkOut.children}
            condition={en.checkOut.childrenCondition}
            value={children}
            setValue={setChildren}
          />
        </View>
      </FunctionalSheet>
      <FunctionalSheet
        isOpen={isPaymentSheetOpen}
        onClose={() => setIsPaymentSheetOpen(false)}
        title={en.sheetHeaders.paymentMethod}
        buttonTitle={en.buttons.confirmAndPay}
        backGroundColor={Colors.sheetWhite}
        onPress={confirmHandler}
        sheetHeight={500}
      >
        <PaymentOption />
      </FunctionalSheet>
      <FormCompleteSheet
        isOpen={isFormCompleteSheetOpen}
        onClose={() => setIsFormCompleteSheetOpen(false)}
        title={en.checkOut.bookingSuccess}
        description={en.checkOut.congratulations}
        image={Images.successPayment}
        buttonText={en.buttons.close}
        onPress={closeHandler}
      />
      <FunctionalSheet
        isOpen={isCouponSheetOpen}
        onClose={() => setIsCouponSheetOpen(false)}
        title={en.sheetHeaders.myCoupon}
        buttonTitle={en.buttons.useCoupon}
        onPress={() => {
          setIsCouponSheetOpen(false);
          setPromoInput(en.checkOut.promoUsed);
        }}
        backGroundColor={Colors.sheetWhite}
        sheetHeight={550}
      >
        <View style={styles.couponContainer}>
          <FlatList
            data={coupons}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <CouponCard
                item={item}
                onSelect={id => setSelectedCoupon(id)}
                selected={selectedCoupon}
              />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatList}
          />
        </View>
      </FunctionalSheet>
    </Layout>
  );
};

export default CheckOutScreen;
