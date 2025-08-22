import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  upperContainer: {
    flexDirection: 'column',
    backgroundColor: Colors.white,
  },
  header: {
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerImage: {
    marginRight: 20,
    height: 60,
    width: 60,
    borderRadius: 50,
    resizeMode: 'cover',
  },
  headerText: {
    fontSize: 35,
    padding: 20,
    fontWeight: '500',
  },
  headerInner: {
    flexDirection: 'column',
    backgroundColor: Colors.white,
  },
  searchBar: {
    marginRight: 65,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  input: {
    borderColor: Colors.primary,
    borderWidth: 2,
    paddingVertical: 10,
  },
  searchIcon: {
    width: 70,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  stayList: {
    flex: 1,
    marginTop: 10,
    marginLeft: 20,
  },
  bottomContainer: {
    marginTop: 20,
    marginLeft: 10,
    gap: 20,
  },
  bottomTitle: {
    marginLeft: 10,
    fontSize: 30,
    fontWeight: 800,
  },
});

export default styles;
