import React, { ReactNode } from 'react';
import {
  GestureResponderEvent,
  KeyboardTypeOptions,
  StyleProp,
  TextStyle,
  View,
} from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';
import { RenderProps } from 'react-native-paper/lib/typescript/components/TextInput/types';

interface InputProps {
  style?: StyleProp<TextStyle>;
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
  onFocus?: (args: unknown) => void;
  onBlur?: (args: unknown) => void;
  render?: (props: RenderProps) => ReactNode;
  helperText: string | undefined;
  visible: boolean | undefined;
  keyboardType?: KeyboardTypeOptions;
  editable?: boolean | undefined;
  onPressIn?: (event: GestureResponderEvent) => void;
  mode?: 'flat' | 'outlined';
}

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
