import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';

export const style = StyleSheet.create({
  formContainer: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  input: {
    fontFamily: fonts.heading,
    marginTop: 10,
    height: 60,
  },
  buttonText: {
    color: '#fff',
    fontFamily: fonts.heading,
  },
  jobContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toogle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 15,
  },
  toogleText: {
    color: '#fff',
  },
});
