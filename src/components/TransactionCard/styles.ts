import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: 'auto',
    marginHorizontal: 20,
    paddingVertical: 15,
    paddingHorizontal: 18,
    backgroundColor: Colors.white,
    gap: 15,
    borderRadius: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  date: {
    fontSize: 15,
    color: Colors.secondary,
    fontWeight: 500,
  },
  status: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  statusText: {
    fontSize: 15,
    paddingHorizontal: 25,
    paddingVertical: 10,
    fontWeight: 600,
  },
  waitingStatus: {
    backgroundColor: '#fff9e7',
  },
  finishedStatus: {
    backgroundColor: '#e8f8f3',
  },
  waitingText: {
    color: '#ffc877',
  },
  finishedText: {
    color: '#58cda3',
  },
  imageRow: {
    marginTop: 10,
    flexDirection: 'row',
    gap: 14,
    alignItems: 'center',
  },
  image: {
    height: 90,
    width: 90,
    resizeMode: 'stretch',
    borderRadius: 10,
  },
  textContainer: {
    flexDirection: 'column',
    gap: 10,
  },
  hotelName: {
    fontSize: 18,
    fontWeight: 700,
  },
  details: {
    fontSize: 15,
    color: Colors.secondary,
  },
  bottom: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  priceContainer: {
    marginTop: 5,
    flexDirection: 'column',
    gap: 6,
  },
  priceText: {
    fontSize: 16,
    fontWeight: 700,
    color: Colors.primary,
  },
  button: {
    top: 6,
    paddingVertical: 8,
    width: 140,
  },
});

export default styles;
