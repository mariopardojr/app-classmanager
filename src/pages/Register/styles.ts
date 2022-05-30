import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    marginHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  formContainer: {
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 34,
    color: '#FFF',
    marginVertical: 20,
  },
  text: {
    fontFamily: fonts.text,
    fontSize: 14,
    color: '#FFF',
  },
  loginButton: {},
  errorMessage: {
    fontFamily: fonts.heading,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    color: '#e60000',
  },
});
