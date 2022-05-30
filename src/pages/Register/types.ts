import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackRoutes } from '../../routes/types';

export interface UserRegister {
  name: string;
  email: string;
  password: string;
  role?: string;
}

export interface RegisterProps {
  navigation: NativeStackNavigationProp<StackRoutes, 'Register'>;
}
