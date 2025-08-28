import Swiper from 'react-native-swiper';
import { useRef, useState } from 'react';
import SecondaryButton from '../../components/SecondaryButton';
import PrimaryButton from '../../components/PrimaryButton';
import styles from './styles';
import { Routes } from '../../navigation/routes';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import Layout from '../../components/Layout';
import SwiperSlide from '../../components/SwiperSlide';
import { AuthStackParams } from '../../navigation/types';
import { en } from '../../translations/en';

const SwiperScreen = () => {
  const swipeRef = useRef<Swiper>(null);
  const navigation = useNavigation<NavigationProp<AuthStackParams>>();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleContinue = () => {
    if (activeIndex < 2) {
      swipeRef.current?.scrollBy(1);
    } else {
      navigation.navigate(Routes.welcome);
    }
  };

  return (
    <Layout edges={['top', 'bottom']} safeAreaView>
      <Swiper
        ref={swipeRef}
        index={0}
        scrollEnabled
        loop={false}
        onIndexChanged={index => setActiveIndex(index)}
        paginationStyle={styles.pagination}
      >
        <Text>
          <SwiperSlide
            image={require('/Users/sky9two/Desktop/Project/HotelBooking/src/assets/images/211130_ohs012-web.jpg')}
            title={en.onboarding.screen1.title}
            description={en.onboarding.screen1.description}
          />
        </Text>
        <Text>
          <SwiperSlide
            image={require('/Users/sky9two/Desktop/Project/HotelBooking/src/assets/images/Travel-collage.png')}
            title={en.onboarding.screen2.title}
            description={en.onboarding.screen2.description}
          />
        </Text>
        <View>
          <SwiperSlide
            image={require('/Users/sky9two/Desktop/Project/HotelBooking/src/assets/images/7d57b0f92d41330885df1adf35ad9bb4.jpg')}
            title={en.onboarding.screen3.title}
            description={en.onboarding.screen3.description}
          />
        </View>
      </Swiper>
      <View style={styles.btnContainer}>
        <PrimaryButton
          text={en.buttons.continue}
          onPress={handleContinue}
          style={styles.button}
        />
        <SecondaryButton
          text={en.buttons.skip}
          onPress={() => navigation.navigate(Routes.welcome)}
        />
      </View>
    </Layout>
  );
};

export default SwiperScreen;
