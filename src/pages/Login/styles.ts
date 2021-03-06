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
    marginVertical: 10,
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 34,
    color: '#FFF',
  },
  text: {
    fontFamily: fonts.text,
    fontSize: 14,
    color: '#FFF',
  },
  loginButton: {
    color: '#FFF',
    marginBottom: 20,
  },
  icon: { marginBottom: 50, alignSelf: 'center' },
  errorMessage: {
    fontFamily: fonts.heading,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    color: '#e60000',
  },
});
