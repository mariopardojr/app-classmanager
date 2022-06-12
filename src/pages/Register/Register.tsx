import { LinearGradient } from 'expo-linear-gradient';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Input from '../../components/Input/Input';
import RegisterForm from '../../assets/fill-form.svg';

import { style } from './styles';
import { registerValidation } from './validation';
import { RegisterProps, UserRegister } from './types';
import UserService from '../../services/UserService/UserService';
import { HttpStatusCode } from '../../contracts/result/http-status-code';
import { useLoading } from '../../context/LoadingContext/loading';
import { useUser } from '../../context/UserContext/user';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialValues = {
  name: '',
  email: '',
  password: '',
  role: 'teacher',
};

const Register: React.FC<RegisterProps> = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { startLoading, stopLoading } = useLoading();
  const { setUser } = useUser();

  const storeToken = async (token: string) => {
    try {
      await AsyncStorage.setItem('@classmanager_token', JSON.stringify(token));
    } catch (e) {
      console.error('Save token failed', e);
    }
  };

  const handlePasswordVisibility = () => setShowPassword((prevValue) => !prevValue);

  const handleRegister = async (values: UserRegister) => {
    startLoading();

    const result = await UserService.register(values);
    console.log(result);

    if (result.status !== HttpStatusCode.CREATED) {
      stopLoading();
      setErrorMessage(result.message);
      return;
    }
    setUser(result.user);
    await storeToken(result.token);
    navigation.navigate('Home');
    stopLoading();
  };

  return (
    <LinearGradient colors={['#5201ba', '#8a01ba']} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={style.container}>
        <View style={style.header}>
          <Text style={style.title}>Register</Text>
          <RegisterForm width={300} height={200} />
        </View>
        {!!errorMessage && <Text style={style.errorMessage}>{errorMessage}</Text>}
        <Formik initialValues={initialValues} validationSchema={registerValidation} onSubmit={handleRegister}>
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <View style={style.formContainer}>
              <Input
                label="Name"
                error={!!errors.name && !!touched.name}
                value={values.name}
                onChangeText={handleChange('name')}
                right={<TextInput.Icon name="account" color="#5201ba" />}
                helperText={errors.name}
                visible={!!errors.name && !!touched.name}
              />
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
                <Text style={{ color: '#FFF' }}>Submit</Text>
              </Button>
            </View>
          )}
        </Formik>
      </ScrollView>
    </LinearGradient>
  );
};

export default Register;
