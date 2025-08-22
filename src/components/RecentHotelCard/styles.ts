import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
    width: 300,
    height: 230,
    marginHorizontal: 10,
    borderRadius: 20,
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOpacity: 0.33,
    shadowRadius: 3,
    shadowOffset: { height: 2, width: 0 },
    elevation: 2,
  },
  upperContainer: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  image: {
    alignSelf: 'center',
    resizeMode: 'cover',
    height: 110,
    width: '100%',
    borderRadius: 10,
  },
  priceContainer: {
    backgroundColor: 'rgba(77, 74, 74, 0.77)',
    position: 'absolute',
    flexDirection: 'row',
    margin: 10,
    padding: 5,
    borderRadius: 20,
    alignSelf: 'flex-end',
  },
  price: {
    color: Colors.white,
    fontWeight: 700,
  },
  perNight: {
    color: Colors.white,
  },
  textContainer: {
    gap: 5,
    marginTop: 15,
    marginHorizontal: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  location: {
    color: Colors.secondary,
  },
  seperator: {
    marginVertical: 8,
    alignSelf: 'center',
    width: '90%',
    height: 2,
    backgroundColor: Colors.gray,
  },
  amenityRow: {
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  amenity: {
    gap: 5,
    flexDirection: 'row',
  },
  amenityText: {
    color: Colors.secondary,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 50,
    backgroundColor: Colors.secondary,
    marginRight: 10,
  },
});

export default styles;
