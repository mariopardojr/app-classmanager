import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';

export const style = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  container: {
    height: 210,
    width: 310,
    padding: 20,
    backgroundColor: '#FA743E',
    borderRadius: 20,
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  text: {
    fontSize: 12,
    fontFamily: fonts.heading,
    color: '#FFF',
    textAlign: 'justify',
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.heading,
    color: '#FFF',
    marginBottom: 5,
  },
});
