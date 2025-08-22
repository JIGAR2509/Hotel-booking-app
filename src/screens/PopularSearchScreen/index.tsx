import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { HomescreenParams } from '../../navigation/types';
import {
  faBarsStaggered,
  faBed,
  faClose,
  faDumbbell,
  faLocationDot,
  faMap,
  faPizzaSlice,
  faSearch,
  faSliders,
  faSortAmountDownAlt,
  faStar,
  faWifi,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import SearchInput from '../../components/SearchInput';
import styles from './styles';
import hotels from '../../components/HotelFlatlist/data';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Colors from '../../utils/Colors/colors';
import Layout from '../../components/Layout';
import FunctionalSheet from '../../components/FunctionalSheet';
import Input from '../../components/Input';
import SeperatorLine from '../../components/SeperatorLine';
import CheckBox from '../../components/CheckBox';
import { Routes } from '../../navigation/routes';
import CustomHeader from '../../components/Header';
import CustomSwitch from '../../components/Switch';
import { en } from '../../translations/en';
import RangeComponent from '../../components/Range';

const PopularSearch = () => {
  const route = useRoute<RouteProp<HomescreenParams, 'popularSearchScreen'>>();
  const { searchValue } = route.params;

  const [search, setSearch] = useState(searchValue);
  const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false);
  const [isSortBySheetOpen, setIsSortBySheetOpen] = useState(false);
  const [guests, setGuests] = useState('3 Guest(2 Adult , 1 Children)');

  const navigation = useNavigation<NavigationProp<HomescreenParams>>();

  const toggleWorkingHandler = () => {
    if (search?.length === 0) {
      setIsSortBySheetOpen(true);
    } else {
      setSearch('');
    }
  };

  const filteredHotel = hotels.filter(
    hotel =>
      hotel.location.toLowerCase().includes(search.toLowerCase()) ||
      hotel.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <>
      <Layout stickyHeaderIndices={[1]} scrollable>
        <CustomHeader
          headerText="Search"
          icon={faSliders as IconProp}
          onEndIconPress={() => setIsFilterSheetOpen(true)}
        />
        <View style={styles.header}>
          <View style={styles.input}>
            <SearchInput
              value={search}
              startIcon={faSearch as IconProp}
              endIcon={
                search?.length === 0
                  ? (faBarsStaggered as IconProp)
                  : (faClose as IconProp)
              }
              onChangeText={text => setSearch(text)}
              onEndIconPress={toggleWorkingHandler}
            />
          </View>
          <Text style={styles.popularText}>
            {en.popularSearch.popularHotels}
          </Text>
        </View>

        {filteredHotel.map(item => (
          <Pressable
            key={item.id}
            style={styles.hotelContainer}
            onPress={() => {
              navigation.navigate(Routes.hotelScreen, { item });
            }}
          >
            <Image source={item.image} style={styles.image} />
            <View style={styles.ratingContainer}>
              <FontAwesomeIcon
                icon={faStar as IconProp}
                size={18}
                color={Colors.starYellow}
              />
              <Text style={styles.rating}>{item.rating}</Text>
            </View>

            <View style={styles.hotelInfo}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.pricePerNight}>
                {en.common.$}
                {item.pricePerNight}
              </Text>
            </View>
            <View style={styles.locationContainer}>
              <View style={styles.inner}>
                <FontAwesomeIcon
                  icon={faLocationDot as IconProp}
                  size={17}
                  color={Colors.primary}
                />
                <Text style={styles.location}>{item.location}</Text>
              </View>
              <Text style={styles.location}>{en.popularSearch.perNight}</Text>
            </View>
            <SeperatorLine />
            <View style={styles.amenityRow}>
              <View style={styles.amenity}>
                <FontAwesomeIcon
                  icon={faBed as IconProp}
                  size={18}
                  color={Colors.primary}
                />
                <Text style={styles.amenityText}>
                  {item.beds} {en.common.beds}
                </Text>
              </View>

              <View style={styles.dot} />

              <View style={styles.amenity}>
                <FontAwesomeIcon
                  icon={faWifi as IconProp}
                  size={18}
                  color={Colors.primary}
                />
                <Text style={styles.amenityText}>{en.common.wifi}</Text>
              </View>

              <View style={styles.dot} />

              <View style={styles.amenity}>
                <FontAwesomeIcon
                  icon={faDumbbell as IconProp}
                  size={18}
                  color={Colors.primary}
                />
                <Text style={styles.amenityText}>{en.common.gym}</Text>
              </View>
              <View style={styles.dot} />
              <View style={styles.amenity}>
                <FontAwesomeIcon
                  icon={faPizzaSlice as IconProp}
                  size={18}
                  color={Colors.primary}
                />
                <Text style={styles.amenityText}>{en.common.breakfast}</Text>
              </View>
            </View>
          </Pressable>
        ))}

        <FunctionalSheet
          title={en.sheetHeaders.filter}
          buttonTitle={en.popularSearch.filter.button}
          isOpen={isFilterSheetOpen}
          onClose={() => setIsFilterSheetOpen(false)}
          sheetHeight={750}
          backGroundColor={Colors.white}
        >
          <ScrollView
            contentContainerStyle={styles.container}
            style={styles.sheetContainer}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.upperInputs}>
              <Input
                inputLable={en.checkOut.guests}
                value={guests}
                onChangeText={text => setGuests(text)}
                endIcon={faSortAmountDownAlt as IconProp}
                viewStyle={styles.extraStyle}
                editable={false}
              />
              <RangeComponent
                label={en.popularSearch.filter.priceRange}
                firstvalue={en.common.min}
                secondvalue={en.common.max}
                endIcon={faSortAmountDownAlt as IconProp}
              />
            </View>
            <SeperatorLine />
            <View style={styles.switchContainer}>
              <CustomSwitch
                title={en.popularSearch.filter.instantBook}
                description={en.popularSearch.filter.instantBookDesc}
              />
            </View>
            <SeperatorLine />
            <View style={styles.facilities}>
              <CheckBox
                label={en.popularSearch.filter.facilities}
                dataArray={en.popularSearch.filter.options}
              />
            </View>
            <SeperatorLine />
            <Text style={styles.ratingHeader}>{en.common.ratings}</Text>

            <View style={styles.sheetRatingContainer}>
              {new Array(5).fill(5).map((_, index) => {
                return (
                  <View key={index} style={styles.ratings}>
                    <FontAwesomeIcon
                      icon={faStar as IconProp}
                      size={15}
                      color={Colors.starYellow}
                    />
                    <Text style={styles.ratingText}>{`${index + 1}`}</Text>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </FunctionalSheet>

        <FunctionalSheet
          title={en.sheetHeaders.sortby}
          buttonTitle={en.buttons.apply}
          isOpen={isSortBySheetOpen}
          onClose={() => setIsSortBySheetOpen(false)}
          backGroundColor={Colors.white}
          sheetHeight={400}
        >
          <View style={styles.sortbyContainer}>
            <CheckBox dataArray={en.popularSearch.sortBy.options} />
          </View>
        </FunctionalSheet>
      </Layout>
      <TouchableOpacity
        style={styles.mapButton}
        onPress={() => navigation.navigate(Routes.mapScreen)}
      >
        <FontAwesomeIcon
          icon={faMap as IconProp}
          size={18}
          color={Colors.white}
        />
        <Text style={styles.map}>{en.common.map}</Text>
      </TouchableOpacity>
    </>
  );
};

export default PopularSearch;
