import { Platform, StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  bottomsheetContainer: {
    borderRadius: 40,
    justifyContent: 'space-between',
  },
  bottomsheetIcon: {
    top: 0,
    width: 70,
    height: 7,
    backgroundColor: Colors.secondary,
  },

  header: {
    justifyContent: 'space-between',
    marginRight: 30,
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 19,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 800,
  },
  button: {
    paddingBottom: Platform.OS === 'android' ? 10 : 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  sheetButton: {
    width: '70%',
  },
});

export default styles;
