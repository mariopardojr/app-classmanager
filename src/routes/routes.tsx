import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home/Home';
import StudentRegister from '../pages/StudentRegister/StudentRegister';

const Stack = createNativeStackNavigator()

const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Student Register" component={StudentRegister} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRoutes;