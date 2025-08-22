import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  label: {
    marginTop: 20,
  },
  filterContainer: {
    marginTop: 13,
    gap: 10,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 20,
    gap: 15,
  },
  innerTexts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsText: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: '500',
  },
  text: {
    color: Colors.secondary,
    fontSize: 16,
  },
  totalText: {
    fontSize: 16,
    fontWeight: '700',
  },
  bottomButton: {
    flex: 1,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  button: {
    width: '70%',
  },
  personSheet: {
    marginBottom: 30,
    marginTop: 20,
  },

  couponContainer: {
    height: 340,
    marginTop: 20,
    paddingBottom: 5,
  },
  seperator: {
    marginTop: 20,
  },
  flatList: {
    gap: 15,
    paddingBottom: 15,
    marginHorizontal: 15,
  },
});

export default styles;
