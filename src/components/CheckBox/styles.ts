import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  arrayItems: {
    marginHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 7,
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    fontWeight: 500,
    marginBottom: 17,
    marginLeft: 20,
  },
  checkIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 10,
    width: 10,
    padding: 12,
    backgroundColor: Colors.primary,
    borderRadius: 5,
  },
  item: {
    color: Colors.secondary,
    fontSize: 17,
  },
  unchecked: {
    height: 10,
    width: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.secondary,
  },
});

export default styles;
