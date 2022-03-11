import { Student } from '../../context/StudentContext/types';

export interface StudentListProps {
  students: Student[];
  isRefreshing: boolean;
  handleRefresh: () => void;
}
