import { ILesson } from '../../interfaces/ILesson';

export enum Months {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}
export interface LessonProps {
  lessons: ILesson[];
  setEnableCard: (value: boolean) => void;
  isRefreshing: boolean;
  handleRefresh: () => void;
}
