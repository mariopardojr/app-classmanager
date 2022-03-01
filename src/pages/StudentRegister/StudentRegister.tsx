import { LinearGradient } from 'expo-linear-gradient';
import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Header from '../../components/Header/Header';
import fonts from '../../styles/fonts';
import { registerValidationSchema } from './validation';
import BackIcon from '../../assets/arrow-left.svg'
import { StudentRegisterProps } from './types';

const initialValues = {
  name: '',
  age: '',
  job: '',
  grade: '',
  englishLevel: '',
}

const StudentRegister: React.FC<StudentRegisterProps> = ({ navigation }) => {
  const handleNavigateToGoBack = () => navigation.goBack()

  return (
    <LinearGradient colors={['#5201ba', '#8a01ba']} style={{ flex: 1 }}>
      <ScrollView>
        <View style={{
          marginTop: 30,
          marginLeft: 15
        }}>
          <TouchableOpacity onPress={handleNavigateToGoBack}>
            <BackIcon width={50} height={50}/>
          </TouchableOpacity>
        </View>
        <Header text="New student" />
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => console.log(values)}
          validationSchema={registerValidationSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <View style={style.formContainer}>
              {console.log(errors)}
              <TextInput
                style={style.input}
                autoComplete={false}
                label="Name"
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                right={<TextInput.Icon name="account" color="#5201ba"/>}
              />
              <TextInput
                style={style.input}
                autoComplete={false}
                label="Age"
                value={values.age}
                onChangeText={handleChange('age')}
                onBlur={handleBlur('age')}
                right={<TextInput.Icon name="calendar-clock" color="#5201ba"/>}
                keyboardType='number-pad'
              />
              <TextInput
                style={style.input}
                autoComplete={false}
                label="Job"
                value={values.job}
                onChangeText={handleChange('job')}
                onBlur={handleBlur('job')}
                right={<TextInput.Icon name="briefcase" color="#5201ba"/>}
              />
              <TextInput
                style={style.input}
                autoComplete={false}
                label="Grade"
                value={values.grade}
                onChangeText={handleChange('grade')}
                onBlur={handleBlur('grade')}
                right={<TextInput.Icon name="school" color="#5201ba"/>}
              />
              <TextInput
                style={style.input}
                autoComplete={false}
                label="English level"
                value={values.englishLevel}
                onChangeText={handleChange('englishLevel')}
                onBlur={handleBlur('englishLevel')}
                right={<TextInput.Icon name="head-lightbulb" color="#5201ba"/>}
              />
              <Button
                style={{
                  margin: 20
                }}
                onPress={handleSubmit}
                mode='contained'
                color="#FA743E"
              >
                <Text style={style.buttonText}>Register</Text>
              </Button>

          </View>
          )}
        </Formik>
      </ScrollView>
    </LinearGradient>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    margin: 20,
    justifyContent: 'space-between'
  },
  input: {
    marginBottom: 20,
    fontFamily: fonts.heading
  },
  buttonText: {
    color: '#fff',
    fontFamily: fonts.heading
  }
})

export default StudentRegister;