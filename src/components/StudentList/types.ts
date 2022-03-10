import { Student } from '../../services/UserService/types';

export interface StudentListProps {
  students: Student[] | undefined;
  isRefreshing: boolean;
  handleRefresh: () => void;
}
