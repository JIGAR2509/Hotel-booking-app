import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  backButton: {
    elevation: 1,
    shadowColor: Colors.black,
    shadowOpacity: 0.06,
    shadowOffset: { height: 2, width: 2 },
    alignItems: 'center',
    justifyContent: 'center',
    width: 47,
    height: 47,
    borderRadius: 30,
    marginLeft: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: Colors.white,
  },
});

export default styles;
