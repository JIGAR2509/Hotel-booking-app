import { Platform, StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  swiperContainer: {
    height: '40%',
  },
  swiperImage: {
    height: Platform.OS === 'ios' ? 340 : 400,
    width: '100%',
    resizeMode: 'stretch',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 20,
    margin: 3,
  },
  activeDot: {
    backgroundColor: Colors.white,
    width: 10,
    height: 10,
    borderRadius: 20,
    margin: 3,
  },
  overlayIcons: {
    position: 'absolute',
    top: 100,
    left: 25,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightIcons: {
    flexDirection: 'row',
    gap: 12,
  },
  IconBox: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 10,
    borderRadius: 25,
  },
  infoContainer: {
    padding: 16,
    marginLeft: 6,
    gap: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
  },
  rating: {
    fontSize: 16,
    marginLeft: 4,
    fontWeight: '800',
  },
  reviews: {
    marginLeft: 6,
    color: Colors.secondary,
  },
  locationRow: {
    flexDirection: 'row',
  },
  location: {
    color: Colors.secondary,
    marginTop: 6,
  },
  description: {
    color: Colors.secondary,
  },
  amenitiesRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 40,
    marginTop: 10,
  },
  amenity: {
    alignItems: 'center',
  },
  readAll: {
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reviewFlatlist: { paddingHorizontal: 20 },
  reviewHeaderText: {
    fontSize: 18,
    fontWeight: 700,
  },
  bottomContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? 130 : 150,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    width: '70%',
  },
  priceContainer: {
    alignItems: 'center',
  },
  price: {
    fontSize: 22,
    fontWeight: 800,
  },
  bottomText: {
    color: Colors.secondary,
  },
});

export default styles;
