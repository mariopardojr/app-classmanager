import { RouteProp } from '@react-navigation/native';
import { StackRoutes } from '../../routes/types';

export interface StudentDetailsProps {
  route: RouteProp<StackRoutes, 'Student Details'>;
}

export interface NoteFormValues {
  title: string;
  note: string;
}
