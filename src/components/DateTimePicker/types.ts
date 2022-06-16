export interface DateTimePickerProps {
  error: boolean;
  label: string;
  value: string;
  onChangeText: any;
  field: string;
  visible: boolean;
  isDatePickerVisible: boolean;
  hideDatePicker: () => void;
  showDatePicker: () => void;
  setFieldValue: (field: string, value: unknown) => void;
  mode?: 'date' | 'time';
}
