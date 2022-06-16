export type LessonValues = {
  title: string;
  date: string | Date;
  startAt: string | Date;
  endAt: string | Date;
  taught: boolean;
};

export interface LessonModalProps {
  visible: boolean;
  setVisible: (value: boolean) => void;
  handleSubmitButton: (args: any) => void;
  handleRefresh: () => void;
  initialValues?: LessonValues;
  submitButton?: string;
  handleDelete?: () => void;
}
