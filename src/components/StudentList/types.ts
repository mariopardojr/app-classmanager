import { Student } from '../../services/types';

export interface StudentListProps {
  students: Student[];
  isRefreshing: boolean;
  handleRefresh: () => void;
}
