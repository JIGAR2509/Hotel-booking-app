import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  image: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 10,
    width: 300,
    height: 300,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 23,
    marginLeft: 10,
  },
  hotelName: {
    color: Colors.white,
    fontWeight: 700,
    fontSize: 18,
  },
  innerContainer: {
    marginTop: 5,
    flexDirection: 'row',
    gap: 3,
  },
  location: {
    color: Colors.white,
    fontWeight: 500,
  },
});

export default styles;
