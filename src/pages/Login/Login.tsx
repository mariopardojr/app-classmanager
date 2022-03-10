import { LinearGradient } from 'expo-linear-gradient';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Input from '../../components/Input/Input';
import { style } from './styles';
import { loginValidation } from './validation';
import ProfessorIcon from '../../assets/professor.svg';
import { LoginFormValues, LoginProps } from './types';
import UserService from '../../services/UserService/UserService';
import { useStudent } from '../../context/StudentContext/student';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HttpStatusCode } from '../../contracts/result/http-status-code';
import { useUser } from '../../context/UserContext/user';

const initialValues = {
  email: '',
  password: '',
};

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { setStudents } = useStudent();
  const { setUser } = useUser();

  const handlePasswordVisibility = () => setShowPassword((prevValue) => !prevValue);

  const storeToken = async (token: string) => {
    try {
      await AsyncStorage.setItem('@classmanager_token', JSON.stringify(token));
    } catch (e) {
      console.error('Save token failed', e);
    }
  };

  const handleLogin = async (values: LoginFormValues) => {
    const result = await UserService.authenticate(values.email, values.password);

    if (result.status !== HttpStatusCode.SUCCESS) {
      // @ts-ignore
      setErrorMessage(result.errorMessage);
      return;
    }
    await storeToken(result.token);
    setUser(result.user);
    setStudents(result.user.students);
    navigation.navigate('Home');
  };

  return (
    <LinearGradient colors={['#5201ba', '#8a01ba']} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={style.container}>
        <ProfessorIcon width={300} height={200} style={style.icon} />
        {console.log(errorMessage)}
        <View style={style.header}>
          <Text style={style.title}>Login</Text>
          <Text style={style.text}>Start manage your classes</Text>
        </View>
        {!!errorMessage && <Text style={style.errorMessage}>{errorMessage}</Text>}
        <Formik initialValues={initialValues} validationSchema={loginValidation} onSubmit={handleLogin}>
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <View style={style.formContainer}>
              <Input
                label="Email"
                error={!!errors.email && !!touched.email}
                value={values.email}
                onChangeText={handleChange('email')}
                right={<TextInput.Icon name="email" color="#5201ba" />}
                helperText={errors.email}
                visible={!!errors.email && !!touched.email}
              />
              <Input
                secureTextEntry={!showPassword}
                label="Password"
                error={!!errors.password && !!touched.password}
                value={values.password}
                onChangeText={handleChange('password')}
                right={<TextInput.Icon name="eye" color="#5201ba" onPress={handlePasswordVisibility} />}
                helperText={errors.password}
                visible={!!errors.password && !!touched.password}
              />
              <Button onPress={handleSubmit} color="#FA743E" mode="contained">
                <Text style={{ color: '#FFF' }}>Login</Text>
              </Button>
            </View>
          )}
        </Formik>
      </ScrollView>
    </LinearGradient>
  );
};

export default Login;
