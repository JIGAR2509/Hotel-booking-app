import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  dataContainer: {
    marginVertical: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  textContainer: {
    width: '82%',
    gap: 8,
  },
  innerText: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  title: {
    flex: 1,
    fontSize: 15,
    fontWeight: '800',
    color: Colors.black,
    paddingRight: 12,
  },
  time: {
    fontSize: 12,
    color: 'gray',
    marginTop: 2,
  },
  message: {
    fontSize: 13,
    color: Colors.secondary,
  },
});

export default styles;
