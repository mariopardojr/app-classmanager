import React from 'react';
import { View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({
  mode = 'flat',
  label,
  onChangeText,
  value,
  error,
  helperText,
  visible,
  keyboardType = 'default',
  ...otherProps
}) => {
  return (
    <View>
      <TextInput
        {...otherProps}
        mode={mode}
        label={label}
        onChangeText={onChangeText}
        value={value}
        error={error}
        keyboardType={keyboardType}
      />
      <HelperText style={{ color: '#e60000' }} type="error" visible={visible}>
        {helperText}
      </HelperText>
    </View>
  );
};

export default Input;
