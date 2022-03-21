type Lesson = {
  _id: string;
  date: string;
  done: boolean;
  description: string;
  duration: string;
};

export interface LessonCardProps {
  lesson: Lesson;
}
