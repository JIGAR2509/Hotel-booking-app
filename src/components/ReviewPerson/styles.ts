import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  dataContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  textContainer: {
    width: '85%',
    gap: 8,
  },
  innerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  rating: {
    flexDirection: 'row',
    gap: 5,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  comment: {
    fontSize: 13,
    color: Colors.secondary,
  },
});

export default styles;
