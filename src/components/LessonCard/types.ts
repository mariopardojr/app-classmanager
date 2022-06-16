import { ILesson } from '../../interfaces/ILesson';

export interface LessonCardProps {
  lesson: ILesson;
  handleRefresh: () => void;
}
