import { NoteFormValues } from '../pages/StudentDetails/types';
import { Note } from '../services/StudentService/types';
import 'react-native-get-random-values';
import * as uuid from 'uuid';

const formatNoteToPatch = (note: NoteFormValues): Note => ({ ...note, id: uuid.v4() });

const getRandomNumber = (): number => {
  return Math.floor(Math.random() * 1000);
};

const Utils = {
  formatNoteToPatch,
  getRandomNumber,
};

export default Utils;
