import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';

export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    fontFamily: fonts.text,
    fontSize: 14,
    color: '#FFF',
  },
  image: {
    width: 156,
    height: 156,
    borderRadius: 100,
    borderColor: '#FA743E',
    borderWidth: 2,
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 24,
    color: '#FFF',
  },
  subtitle: {
    fontSize: 18,
    fontFamily: fonts.heading,
    color: '#FFF',
  },
  addButton: {
    backgroundColor: '#FA743E',
    width: 140,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  notes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 30,
  },
  modal: {
    backgroundColor: '#FFF',
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 20,
  },
});
