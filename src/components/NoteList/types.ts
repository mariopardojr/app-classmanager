import { INote } from '../../interfaces/INote';

export interface NoteListProps {
  notes: INote[];
  isRefreshing: boolean;
  handleRefresh: () => void;
  setEnableCard: (arg: boolean) => void;
}
