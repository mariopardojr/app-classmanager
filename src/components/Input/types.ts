import { ReactNode } from 'react';
import {
  GestureResponderEvent,
  KeyboardTypeOptions,
  StyleProp,
  TextStyle,
} from 'react-native';
import { RenderProps } from 'react-native-paper/lib/typescript/components/TextInput/types';

export interface InputProps {
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
