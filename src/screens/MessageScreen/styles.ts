import { Platform, StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  header: {
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  listContainer: {
    paddingHorizontal: Platform.OS === 'android' ? 25 : 20,
    paddingBottom: 20,
    gap: 10,
  },
  emptyContainer: {
    gap: 10,
    paddingHorizontal: 10,
    height: Platform.OS === 'ios' ? 500 : 650,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: { height: 300, width: 300 },
  title: {
    fontSize: 24,
    color: Colors.primary,
    textAlign: 'center',
    fontWeight: 800,
  },
  description: { color: Colors.secondary, fontWeight: 500 },
});

export default styles;
