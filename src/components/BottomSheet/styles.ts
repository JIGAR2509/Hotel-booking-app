import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  bottomsheetContainer: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: 'space-between',
  },
  bottomsheetIcon: {
    top: 0,
    width: 70,
    height: 7,
    backgroundColor: Colors.secondary,
  },
});

export default styles;
