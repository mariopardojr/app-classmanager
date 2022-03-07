import { Note } from '../../services/StudentService/types';

export interface NoteListProps {
  notes: Note[];
  isRefreshing: boolean;
  handleRefresh: () => void;
}
