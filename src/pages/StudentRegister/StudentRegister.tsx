import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button, Menu, Switch, TextInput } from 'react-native-paper';
import Header from '../../components/Header/Header';
import fonts from '../../styles/fonts';
import BackIcon from '../../assets/arrow-left.svg'
import { StudentRegisterFormValues, StudentRegisterProps } from './types';
import Input from '../../components/Input/Input';
import { registerValidationSchema as registerSchema } from './validation';
import { Formik } from 'formik';
import StudentService from '../../services/studentService';


const initialValues = {
  name: '',
  age: '',
  job: 'Student',
  grade: '',
  englishLevel: '',
}

const StudentRegister: React.FC<StudentRegisterProps> = ({ navigation }) => {
  const handleNavigateToGoBack = () => navigation.navigate('Home')
  const [isStudent, setIsStudent] = useState(true)
  const [visible, setVisible] = useState(false)

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const levels = [
    { id: '1', name: 'Beginner/Elementary'},
    { id: '2', name: 'Pre Intermediate'},
    { id: '3', name: 'Intermediate'},
    { id: '4', name: 'Upper Intermediate'},
    { id: '5', name: 'Advanced'},
    { id: '6', name: 'Proficient'},
  ]

  const handleSwitch = () => {
    setIsStudent((toogle) => !toogle)
  }

  const handleStudentRegister = (values: StudentRegisterFormValues) => {
    StudentService.createStudent(values)
  }

  return (
    <LinearGradient colors={['#5201ba', '#8a01ba']} style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <ScrollView>
            <KeyboardAvoidingView>
              <View style={{ marginLeft: 15 }}>
                <TouchableOpacity onPress={handleNavigateToGoBack}>
                  <BackIcon width={50} height={50} style={{ marginTop: 30 }} />
                </TouchableOpacity>
              </View>
              <Header text="New student" />
              <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={(values, actions) => {
                  handleStudentRegister(values)
                  actions.resetForm()
                }}
                validateOnBlur
              >
              {({ values,
                  errors,
                  touched,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  setFieldValue,
                  setFieldError
              }) => (
                <View style={style.formContainer}>
                  <Input
                    style={style.input}
                    error={!!errors.name && !!touched.name}
                    label="Name"
                    value={values.name}
                    onBlur={handleBlur('name')}
                    onChangeText={handleChange('name')}
                    right={<TextInput.Icon name="account" color="#5201ba"/>}
                    helperText={errors.name}
                    visible={!!touched.name && !!errors.name}
                  />
                  <Input
                    style={style.input}
                    error={!!errors.age && !!touched.age}
                    label="Age"
                    value={values.age}
                    onBlur={handleBlur('age')}
                    onChangeText={handleChange('age')}
                    right={<TextInput.Icon name="calendar-clock" color="#5201ba"/>}
                    helperText={errors.age}
                    visible={!!touched.age && !!errors.age}
                    keyboardType='numeric'
                  />
                  <View style={style.jobContainer}>
                    <Input
                      style={{ ...style.input, width: 170 }}
                      error={!!errors.job && !!touched.job}
                      disabled={isStudent}
                      label="Job"
                      value={values.job}
                      onBlur={handleBlur('job')}
                      onChangeText={handleChange('job')}
                      right={<TextInput.Icon name="briefcase" color="#5201ba" disabled={isStudent}/>}
                      helperText={errors.job}
                      visible={!!errors.job && !!touched.job}
                    />
                    <View style={style.toogle}>
                      <Text style={style.toogleText}>Is he/she student?</Text>
                      <Switch
                        value={isStudent}
                        onValueChange={() => {
                          handleSwitch()
                          setFieldError('job', '')
                          setFieldValue('job', isStudent ? '' : 'Student')
                        }}
                        color="#FA743E"
                      />
                    </View>
                  </View>
                  <Input
                    style={style.input}
                    error={!!errors.grade && !!touched.grade}
                    disabled={!isStudent}
                    label="Grade"
                    value={values.grade}
                    onBlur={handleBlur('grade')}
                    onChangeText={handleChange('grade')}
                    right={<TextInput.Icon name="school" color="#5201ba" disabled={!isStudent}/>}
                    helperText={errors.grade}
                    visible={!!errors.grade && !!touched.grade}
                  />
                  <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                      <TouchableOpacity onPress={openMenu}>
                        <Input
                        editable={false}
                        style={style.input}
                        error={!!errors.englishLevel && !!touched.englishLevel}
                        label="English level"
                        value={values.englishLevel}
                        onBlur={handleBlur('englishLevel')}
                        onChangeText={handleChange('englishLevel')}
                        right={<TextInput.Icon name="head-lightbulb" color="#5201ba"/>}
                        helperText={errors.englishLevel}
                        visible={!!errors.englishLevel && !!touched.englishLevel}
                        onPressIn={openMenu}
                        />
                      </TouchableOpacity>
                    }
                  >
                    {
                      levels.map((level) => (
                        <Menu.Item
                          key={level.id}
                          title={level.name}
                          onPress={() => {
                            setFieldValue('englishLevel', level.name)
                            closeMenu()
                          }}
                        />
                      ))
                    }
                  </Menu>
                  <Button
                    style={{ marginTop: 10 }}
                    onPress={() => {
                      handleSubmit()
                      setIsStudent(true)
                    }}
                    mode='contained'
                    color="#FA743E"
                  >
                    <Text style={style.buttonText}>Submit</Text>
                  </Button>
                </View>
              )}
              </Formik>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
    </LinearGradient>
  )
}

const style = StyleSheet.create({
  formContainer: {
    paddingHorizontal: 20,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  input: {
    fontFamily: fonts.heading,
    marginTop: 10,
    height: 60
  },
  buttonText: {
    color: '#fff',
    fontFamily: fonts.heading
  },
  jobContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  toogle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 15
  },
  toogleText: {
    color: '#fff'
  }
})

export default StudentRegister;