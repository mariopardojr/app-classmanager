import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';

export const style = StyleSheet.create({
  modal: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  modalButton: { borderRadius: 20, marginTop: 15 },
  title: {
    fontFamily: fonts.heading,
    fontSize: 24,
    color: '#FFF',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
