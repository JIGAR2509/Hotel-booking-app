import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  input: {
    marginTop: 25,
  },
  header: {
    backgroundColor: Colors.white,
  },
  extraStyle: {
    gap: 50,
  },
  hotelContainer: {
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.22,
    shadowRadius: 10,
    elevation: 5,
    height: 300,
    marginHorizontal: 20,
    borderRadius: 20,
    marginVertical: 10,
    backgroundColor: Colors.white,
  },
  popularText: {
    paddingVertical: 20,
    fontSize: 20,
    fontWeight: 800,
    marginLeft: 15,
  },
  image: {
    resizeMode: 'stretch',
    height: 170,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  hotelInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  pricePerNight: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 18,
  },
  location: {
    color: Colors.secondary,
    fontSize: 14,
    fontWeight: 400,
  },
  locationContainer: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  inner: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },

  amenityRow: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  amenity: {
    paddingHorizontal: 8,
    gap: 5,
    flexDirection: 'row',
  },
  amenityText: {
    color: Colors.secondary,
  },
  dot: {
    height: 5,
    width: 5,
    borderRadius: 50,
    backgroundColor: Colors.secondary,
  },
  ratingContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginRight: 20,
    gap: 5,
    backgroundColor: 'rgba(49, 49, 49, 0.70)',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rating: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: 600,
  },

  mapButton: {
    position: 'absolute',
    bottom: 60,
    backgroundColor: 'rgba(32, 32, 32, 0.7)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    gap: 5,
  },
  map: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: { paddingBottom: 15 },
  sheetContainer: {
    marginTop: 25,
    marginBottom: 28,
  },
  upperInputs: {
    gap: 10,
    paddingBottom: 15,
  },
  switchContainer: {
    marginVertical: 10,
  },
  facilities: {
    marginVertical: 10,
  },
  ratings: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    gap: 5,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: Colors.secondary,
  },
  ratingHeader: {
    fontSize: 18,
    fontWeight: 600,
    marginLeft: 20,
    paddingTop: 10,
  },
  sheetRatingContainer: {
    marginTop: 10,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: 600,
  },
  sortbyContainer: {
    paddingBottom: 20,
    marginRight: 12,
  },
});

export default styles;
