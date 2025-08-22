import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
  },
  button: {
    width: '70%',
  },
  textContainer: {
    marginBottom: 15,
    gap: 20,
    alignItems: 'center',
    padding: 27,
  },
  titleText: {
    color: Colors.black,
    fontSize: 30,
    fontWeight: 800,
  },
  descriptionText: {
    textAlign: 'center',
    color: Colors.secondary,
    fontWeight: 500,
    fontSize: 16,
  },
  btnContainer: {
    marginTop: 40,
    alignItems: 'center',
    gap: 5,
    paddingBottom: 10,
  },
});

export default styles;
