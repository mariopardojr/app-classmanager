import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  greeting: {
    fontFamily: fonts.text,
    fontSize: 32,
    color: '#fff',
  },
  username: {
    fontFamily: fonts.heading,
    fontSize: 32,
    color: '#fff',
  },
});
