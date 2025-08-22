import { StyleSheet, Platform } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 50,
    resizeMode: 'stretch',
  },
  textContainer: {
    width: '78%',
    gap: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 600,
  },
  upperText: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lowerText: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time: {
    fontSize: 14,
    fontWeight: 500,
    color: Colors.secondary,
  },
  message: {
    fontSize: 14,
    fontWeight: 600,
    color: Colors.secondary,
  },
  count: {
    backgroundColor: Colors.red,
    height: 20,
    width: 20,
    textAlign: 'center',
    padding: Platform.OS === 'ios' ? 2 : 0,
    borderRadius: 20,
    color: Colors.white,
    fontWeight: 500,
  },
});

export default styles;
