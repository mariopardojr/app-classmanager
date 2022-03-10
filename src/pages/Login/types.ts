import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackRoutes } from '../../routes/types';
export interface LoginFormValues {
  email: string;
  password: string;
}

export interface LoginProps {
  navigation: NativeStackNavigationProp<StackRoutes, 'Login'>;
}
