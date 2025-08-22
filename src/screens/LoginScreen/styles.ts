import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  textContainer: {
    marginTop: 27,
    marginLeft: 25,
    gap: 15,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 800,
  },
  welcomeDescription: {
    color: Colors.secondary,
    fontWeight: 500,
  },
  inputContainer: {
    marginHorizontal: 5,
    marginTop: 50,
    gap: 20,
  },
  forgotButton: {
    marginRight: 20,
    alignItems: 'flex-end',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 30,
  },
  optionText: {
    marginVertical: 15,
    color: Colors.secondary,
    fontWeight: 400,
    fontSize: 17,
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
    gap: 20,
  },
  socialMediaButton: {
    gap: 17,
    paddingHorizontal: 20,

    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    paddingVertical: 10,
    elevation: 5,
    shadowColor: Colors.black,
    shadowOpacity: 0.23,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 3,
  },
  buttonIcon: {
    height: 25,
    width: 25,
  },
  googleIconText: {
    fontSize: 17,
    fontWeight: 500,
  },

  facebookIconText: {
    fontSize: 17,
    fontWeight: 500,
    color: Colors.white,
  },
  button: {
    width: '70%',
  },
  bottomInnerContainer: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 3,
  },
});

export default styles;
