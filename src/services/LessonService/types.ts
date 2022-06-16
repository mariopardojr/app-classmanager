import { LessonValues } from '../../components/LessonModal/types';

export interface IRawLesson {
  _id: string;
  title: string;
  date: string;
  startAt: string;
  endAt: string;
  studentId: string;
  taught: boolean;
}

export interface LessonCreate extends LessonValues {
  studentId: string;
}
