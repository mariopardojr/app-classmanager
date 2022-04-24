import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';

export const style = StyleSheet.create({
  container: {
    backgroundColor: '#FA743E',
    borderRadius: 12,
    marginHorizontal: 10,
    marginBottom: 25,
    height: 100,
    flexDirection: 'row',
    zIndex: 1,
  },
  description: {
    color: '#fff',
    fontFamily: fonts.heading,
  },
  text: {
    color: '#fff',
  },
});
