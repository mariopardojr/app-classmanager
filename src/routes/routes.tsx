import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home/Home';
import StudentRegister from '../pages/StudentRegister/StudentRegister';
import StudentDetails from '../pages/StudentDetails/StudentDetails';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

const Stack = createNativeStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Student Register" component={StudentRegister} />
        <Stack.Screen name="Student Details" component={StudentDetails} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
