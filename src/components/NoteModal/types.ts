type NoteInitalValues = {
  title: string;
  note: string;
};

export interface AddNoteModalProps {
  visible: boolean;
  setVisible: (value: boolean) => void;
  handleSubmitButton: (args: any) => void;
  handleRefresh: () => void;
  initialValues?: NoteInitalValues;
}
