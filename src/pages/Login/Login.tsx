import { LinearGradient } from 'expo-linear-gradient';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Input from '../../components/Input/Input';
import { style } from './styles';
import { loginValidation } from './validation';

const initialValues = {
  email: '',
  password: '',
};

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => setShowPassword((prevValue) => !prevValue);

  return (
    <LinearGradient colors={['#5201ba', '#8a01ba']} style={{ flex: 1 }}>
      <View style={style.container}>
        <View style={style.header}>
          <Text style={style.title}>Login</Text>
          <Text style={style.text}>Start manage your classes</Text>
        </View>
        <Formik
          initialValues={initialValues}
          validationSchema={loginValidation}
          onSubmit={(values) => console.log(values)}
        >
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
      </View>
    </LinearGradient>
  );
};

export default Login;
