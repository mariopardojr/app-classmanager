import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackRoutes } from '../../routes/types';

export interface HomeProps {
  navigation: NativeStackNavigationProp<StackRoutes, 'Home'>;
  route: RouteProp<StackRoutes, 'Home'>;
}
