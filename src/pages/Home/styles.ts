import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
  paragraph: {
    fontSize: 18,
    fontFamily: fonts.text,
    color: '#fff',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
