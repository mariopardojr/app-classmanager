import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, TextStyle, View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';
import { RenderProps } from 'react-native-paper/lib/typescript/components/TextInput/types';

interface InputProps {
  style: StyleProp<TextStyle>
  left?: ReactNode;
  right?: ReactNode;
  value?: string;
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  error?: boolean;
  onChangeText?: (value: string) => void;
  selectionColor?: string;
  underlineColor?: string;
  activeColor?: string;
  activeUnderlineColor?: string;
  outlineColor?: string;
  activeOutlineColor?: string;
  dense?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  onFocus?: (args: any) => void;
  onBlur?: (args: any) => void;
  render?: (props: RenderProps) => ReactNode;
  helperText: string;
  visible: boolean;
}

const Input: React.FC<InputProps> = ({
  style,
  label,
  onChangeText,
  value,
  error,
  helperText,
  visible,
  ...otherProps

}) => {
  return (
    <View style={inputStyle.container}>
      <TextInput
        {...otherProps}
        style={style}
        mode="outlined"
        label={label}
        onChangeText={onChangeText}
        value={value}
        error={error}
      />
      <HelperText type="error" visible={visible}>
        {helperText}
      </HelperText>
    </View>
  )
}

const inputStyle = StyleSheet.create({
  container: {
    marginBottom: 10,
  }
})

export default Input;