import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { faListDots } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { CalendarList } from 'react-native-calendars';
import { Text, View } from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { HomescreenParams } from '../../navigation/types';
import CustomHeader from '../../components/Header';
import Colors from '../../utils/Colors/colors';
import { useToast } from 'react-native-toast-notifications';
import { Routes } from '../../navigation/routes';
import { en } from '../../translations/en';

const CalendarScreen = () => {
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);
  const [markedDates, setMarkedDates] = useState({});

  const route = useRoute<RouteProp<HomescreenParams, 'calendarScreen'>>();
  const { item } = route.params;

  const navigation = useNavigation<any | NavigationProp<HomescreenParams>>();
  const toast = useToast();

  const handleDayPress = (day: any) => {
    const selectedDate = day.dateString;
    if (!startDate || (startDate && endDate)) {
      setStartDate(selectedDate);
      setEndDate(null);
      setMarkedDates({
        [selectedDate]: {
          startingDay: true,
          endingDay: true,
          color: Colors.primary,
          textColor: Colors.white,
        },
      });
    } else {
      const range = getDateRange(startDate, selectedDate);
      const newMarkedDates: any = {};

      range.forEach((date, index) => {
        newMarkedDates[date] = {
          color: '#e6edff',
          textColor: Colors.primary,
          startingDay: index === 0,
          endingDay: index === range.length - 1,
          ...(index === 0 || index === range.length - 1
            ? {
                color: Colors.primary,
                textColor: Colors.white,
              }
            : {}),
        };
      });

      setEndDate(selectedDate);
      setMarkedDates(newMarkedDates);
    }
  };

  const getDateRange = (start: string, end: string): string[] => {
    const range: string[] = [];
    const pickDate = new Date(start);
    const outDate = new Date(end);
    let current = new Date(pickDate);

    while (current <= outDate) {
      range.push(current.toISOString().split('T')[0]);
      current.setDate(current.getDate() + 1);
    }

    return range;
  };
  const formatDate = (start: string, end: string) => {
    const startObj = new Date(start);
    const endObj = new Date(end);

    const month = startObj.toLocaleString('en-US', { month: 'short' });
    const year = startObj.getFullYear();

    return `${startObj.getDate()} - ${endObj.getDate()} ${month} ${year}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        icon={faListDots as IconProp}
        headerText={en.common.selectDates}
      />
      <View style={styles.innerContainer}>
        <CalendarList
          markingType="period"
          markedDates={markedDates}
          onDayPress={handleDayPress}
          hideExtraDays={false}
          pastScrollRange={0}
          futureScrollRange={5}
          scrollEnabled
          showScrollIndicator={false}
          minDate={new Date().toISOString().split('T')[0]}
          contentContainerStyle={styles.calenderContainer}
          renderHeader={date => (
            <Text style={styles.calenderHeader}>
              {date.toString('MMMM yyyy')}
            </Text>
          )}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>
            {item.pricePerNight}
            {en.common.$}
          </Text>
          <Text style={styles.bottomText}>{en.common.perNight}</Text>
        </View>
        <PrimaryButton
          style={styles.button}
          text={en.buttons.verifyAccount}
          onPress={() => {
            if (startDate && endDate) {
              const dateFormat = formatDate(startDate, endDate);

              navigation.popTo(Routes.checkOutScreen, {
                item,
                dates: dateFormat,
              });
            } else {
              toast.show(en.toast.selectDates, {
                duration: 2000,
                type: 'warning',
                style: { backgroundColor: Colors.black, padding: 2 },
                animationType: 'zoom-in',
              });
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default CalendarScreen;
