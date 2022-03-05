import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface StudentRegisterProps {
  navigation: NativeStackNavigationProp<StackRoutes, 'Student Register'>;
}

export interface StudentRegisterFormValues {
  name: string;
  age: string;
  job: string;
  grade: string;
  englishLevel: string;
}
