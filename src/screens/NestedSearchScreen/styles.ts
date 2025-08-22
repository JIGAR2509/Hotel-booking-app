import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  input: {
    marginTop: 30,
  },
  searchList: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
    marginVertical: 10,
  },
  searchText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchLocation: {
    color: Colors.secondary,
  },
  textContainer: {
    marginLeft: 15,
    flexDirection: 'column',
    gap: 6,
  },

  related: {
    paddingVertical: 15,
    marginHorizontal: 20,
    fontSize: 16,
    color: Colors.secondary,
  },
});

export default styles;
