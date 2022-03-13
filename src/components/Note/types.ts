import { IRawNote } from '../../services/interfaces/IRawNote';

export interface NoteProps {
  note: IRawNote;
  handleRefresh?: () => void;
}
