import { NoteFormValues } from '../pages/StudentDetails/types';
import { Note } from '../services/StudentService/types';
import 'react-native-get-random-values';
import * as uuid from 'uuid';

const formatNoteToPatch = (note: NoteFormValues): Note => ({ ...note, id: uuid.v4() });

const Utils = {
  formatNoteToPatch,
};

export default Utils;
