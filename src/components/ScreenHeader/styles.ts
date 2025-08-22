import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 24,
  },
  title: {
    fontWeight: 700,
    fontSize: 30,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 20,
    position: 'absolute',
    right: 13,
    top: 10,
    backgroundColor: 'red',
    zIndex: 1,
  },
  icon: {
    elevation: 1,
    shadowColor: Colors.black,
    shadowOpacity: 0.06,
    shadowOffset: { height: 2, width: 2 },
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 30,
    marginLeft: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: Colors.white,
  },
});

export default styles;
