import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home/Home';
import StudentRegister from '../pages/StudentRegister/StudentRegister';
import StudentDetails from '../pages/StudentDetails/StudentDetails';

const Stack = createNativeStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Student Register" component={StudentRegister} />
        <Stack.Screen name="Student Details" component={StudentDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
