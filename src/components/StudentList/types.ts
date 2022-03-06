import { Student } from '../../services/StudentService/types';

export interface StudentListProps {
  students: Student[];
  isRefreshing: boolean;
  handleRefresh: () => void;
}
