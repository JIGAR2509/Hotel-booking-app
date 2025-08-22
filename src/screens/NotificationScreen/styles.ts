import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  recentContainer: {
    gap: 10,
    marginTop: 30,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recent: {
    fontSize: 18,
    fontWeight: 800,
  },
  length: {
    fontSize: 12,
    backgroundColor: Colors.red,
    color: Colors.white,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 20,
    fontWeight: 600,
  },
  texts: {
    flexDirection: 'row',
    gap: 5,
  },

  flatListContainer: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 30,
  },
});
export default styles;
