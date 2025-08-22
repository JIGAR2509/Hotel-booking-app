import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  backButton: { height: 60, width: 60 },
  header: {
    width: '80%',
    marginTop: 80,
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    alignSelf: 'center',
    backgroundColor: Colors.white,
    paddingRight: 45,
    height: 60,
  },
  listContainer: {
    flex: 1,
    position: 'absolute',
    bottom: 50,
  },
  label: { width: 'auto' },
  flatList: {
    gap: 14,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});

export default styles;
