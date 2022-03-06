import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';

export const style = StyleSheet.create({
  container: {
    height: 200,
    width: 300,
    padding: 20,
    backgroundColor: '#FA743E',
    borderRadius: 20,
    marginHorizontal: 15,
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
