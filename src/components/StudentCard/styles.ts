import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';

export const style = StyleSheet.create({
  container: {
    width: 160,
    height: 160,
    backgroundColor: '#FA743E',
    borderRadius: 20,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  studentName: {
    fontFamily: fonts.heading,
    textAlign: 'justify',
    fontSize: 16,
    color: '#fff',
    margin: 10,
  },
});
