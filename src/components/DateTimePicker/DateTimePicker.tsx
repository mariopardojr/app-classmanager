import React from 'react';
import { View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Input from '../Input/Input';
import { DateTimePickerProps } from './types';

// import { Container } from './styles';

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  error,
  label,
  value,
  onChangeText,
  field,
  visible,
  isDatePickerVisible,
  hideDatePicker,
  showDatePicker,
  setFieldValue,
  mode = 'date',
}) => {
  const formatDate = (datetime: string) => {
    const formatedDate = new Date(datetime);
    return mode === 'date'
      ? formatedDate.toLocaleDateString()
      : formatedDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: undefined });
  };

  return (
    <View>
      <Input
        error={error}
        label={label}
        value={formatDate(value)}
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        onChangeText={onChangeText(field)}
        onPressIn={showDatePicker}
        visible={visible}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={mode}
        onConfirm={(date) => {
          setFieldValue(field, date);
          hideDatePicker();
        }}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default DateTimePicker;
