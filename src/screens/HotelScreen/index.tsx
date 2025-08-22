/* eslint-disable @typescript-eslint/no-shadow */
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowLeft,
  faBowlRice,
  faDumbbell,
  faHeart,
  faLocationDot,
  faShare,
  faShower,
  faStar,
  faWifi,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ImageSourcePropType,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import SecondaryButton from '../../components/SecondaryButton';
import { reviewData } from '../../components/ReviewPerson/data';
import PrimaryButton from '../../components/PrimaryButton';
import { Routes } from '../../navigation/routes';
import { HomescreenParams } from '../../navigation/types';
import { useToast } from 'react-native-toast-notifications';
import Colors from '../../utils/Colors/colors';
import SeperatorLine from '../../components/SeperatorLine';
import ReviewPerson from '../../components/ReviewPerson';
import { en } from '../../translations/en';

const HotelDetailsScreen = () => {
  const route = useRoute<RouteProp<HomescreenParams, 'hotelScreen'>>();
  const { item } = route.params;
  const navigation = useNavigation<NavigationProp<HomescreenParams>>();
  const toast = useToast();
  const [liked, setLiked] = useState(false);

  const swiperRef = useRef<Swiper>(null);
  const renderSeperator = () => <SeperatorLine />;
  return (
    <View style={styles.container}>
      <View style={styles.swiperContainer}>
        <Swiper
          index={0}
          autoplay
          ref={swiperRef}
          dotStyle={styles.dot}
          activeDotStyle={styles.activeDot}
        >
          <Image
            source={item.image as ImageSourcePropType}
            style={styles.swiperImage}
          />
          <Image
            source={item.image as ImageSourcePropType}
            style={styles.swiperImage}
          />
          <Image
            source={item.image as ImageSourcePropType}
            style={styles.swiperImage}
          />
          <Image
            source={item.image as ImageSourcePropType}
            style={styles.swiperImage}
          />
        </Swiper>

        <View style={styles.overlayIcons}>
          <TouchableOpacity
            style={styles.IconBox}
            onPress={() => navigation.goBack()}
          >
            <FontAwesomeIcon
              icon={faArrowLeft as IconProp}
              size={25}
              color={Colors.white}
            />
          </TouchableOpacity>
          <View style={styles.rightIcons}>
            <TouchableOpacity
              style={styles.IconBox}
              onPress={() => {
                Linking.openURL(
                  'https://villa-diamond-lake-view.hyderabad-hotel.com/en/',
                );
              }}
            >
              <FontAwesomeIcon
                icon={faShare as IconProp}
                size={23}
                color={Colors.white}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.IconBox}
              onPress={() => {
                setLiked(!liked);
                !liked
                  ? toast.show(en.hotel.favouriteAdd)
                  : toast.show(en.hotel.favouriteRemove);
              }}
            >
              <FontAwesomeIcon
                icon={faHeart as IconProp}
                size={23}
                color={liked ? Colors.red : Colors.white}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.name}</Text>

        <View style={styles.ratingRow}>
          {[...Array(4)].map((_, index) => (
            <FontAwesomeIcon
              key={index}
              icon={faStar as IconProp}
              size={16}
              color={Colors.starYellow}
            />
          ))}
          {item.rating && (
            <Text style={styles.rating}>{item.rating.toFixed(1)}</Text>
          )}
          {item.reviewCount && (
            <Text style={styles.reviews}>
              ({item.reviewCount} {en.hotel.review})
            </Text>
          )}
        </View>

        <View style={styles.locationRow}>
          <FontAwesomeIcon
            icon={faLocationDot as IconProp}
            size={20}
            color={Colors.secondary}
          />
          <Text style={styles.location}>{item.location}</Text>
        </View>

        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.amenitiesRow}>
          <View style={styles.amenity}>
            <FontAwesomeIcon icon={faWifi as IconProp} size={25} />
            <Text>{en.common.wifi}</Text>
          </View>
          <View style={styles.amenity}>
            <FontAwesomeIcon icon={faShower as IconProp} size={25} />
            <Text>{en.common.shower}</Text>
          </View>
          <View style={styles.amenity}>
            <FontAwesomeIcon icon={faBowlRice as IconProp} size={25} />
            <Text>{en.common.breakfast}</Text>
          </View>
          <View style={styles.amenity}>
            <FontAwesomeIcon icon={faDumbbell as IconProp} size={25} />
            <Text>{en.common.gym}</Text>
          </View>
        </View>
      </View>
      <View style={styles.readAll}>
        <Text style={styles.reviewHeaderText}>{en.hotel.review}</Text>
        <SecondaryButton
          text={en.buttons.seeAll}
          onPress={() => {
            navigation.navigate(Routes.reviewScreen, { item });
          }}
        />
      </View>
      <FlatList
        data={reviewData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ReviewPerson item={item} />}
        ItemSeparatorComponent={renderSeperator}
        contentContainerStyle={styles.reviewFlatlist}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.bottomContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>
            {item.pricePerNight}
            {en.common.$}
          </Text>
          <Text style={styles.bottomText}>{en.hotel.perNight}</Text>
        </View>
        <PrimaryButton
          text={en.buttons.verifyAccount}
          onPress={() => {
            navigation.navigate(Routes.checkOutScreen, { item });
          }}
          style={styles.button}
        />
      </View>
    </View>
  );
};

export default HotelDetailsScreen;
