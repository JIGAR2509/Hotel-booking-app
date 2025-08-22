import { StyleSheet, Platform } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  search: {
    marginTop: 5,
  },
  toggleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Platform.OS === 'ios' ? 220 : 233,
  },
  toggleText: {
    textAlign: 'center',
    color: Colors.secondary,
    marginTop: 20,
    fontSize: 16,
  },
  recent: {
    marginVertical: 15,
    flexDirection: 'row',
    marginHorizontal: 25,
    justifyContent: 'space-between',
  },
  clearButton: {
    color: Colors.red,
  },
  recentText: {
    fontSize: 16,
    color: Colors.secondary,
  },

  bottomInner: {
    marginVertical: 10,
    marginHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomText: {
    fontSize: 20,
    fontWeight: 700,
  },
  flatlist: { paddingVertical: 10, marginHorizontal: 13 },
});
export default styles;
