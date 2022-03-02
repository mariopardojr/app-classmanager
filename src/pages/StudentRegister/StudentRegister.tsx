import { LinearGradient } from 'expo-linear-gradient';
import { Formik, useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Button, HelperText, Switch, TextInput } from 'react-native-paper';
import Header from '../../components/Header/Header';
import fonts from '../../styles/fonts';
import { registerValidationSchema } from './validation';
import BackIcon from '../../assets/arrow-left.svg'
import { StudentRegisterProps } from './types';
import Input from '../../components/Input/Input';

const initialValues = {
  name: '',
  age: '',
  job: 'Student',
  grade: '',
  englishLevel: '',
}

const StudentRegister: React.FC<StudentRegisterProps> = ({ navigation }) => {
  const handleNavigateToGoBack = () => navigation.goBack()
  const { setErrors, values } = useFormik({ initialValues, onSubmit: () => {
    console.log('values =>', values)
  }})
  const [isStudent, setIsStudent] = useState(true)

  const handleSwitch = () => {
    setIsStudent((toogle) => !toogle)
  }

  useEffect(() => {
    setErrors({})
  }, [])

  return (
    <LinearGradient colors={['#5201ba', '#8a01ba']}>
      <ScrollView style={{ paddingTop: 25 }}>
        <View style={{
          marginLeft: 15,
          flex: 1
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
          enableReinitialize
          validateOnBlur={false}
          validateOnChange={false}
        >
          {({ handleChange, handleSubmit, handleBlur, values, errors, setFieldValue }) => (
            <View style={[style.formContainer]}>
              {console.log("Errors", errors)}
              <Input
                style={style.input}
                error={!!errors.name}
                label="Name"
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                right={<TextInput.Icon name="account" color="#5201ba"/>}
                helperText={errors.name}
                visible={!!errors.name }
              />
              <Input
                style={style.input}
                error={!!errors.age}
                label="Age"
                value={values.age}
                onChangeText={handleChange('age')}
                onBlur={handleBlur('age')}
                right={<TextInput.Icon name="calendar-clock" color="#5201ba"/>}
                helperText={errors.age}
                visible={!!errors.age}
                keyboardType='numeric'
              />
              <View style={style.jobContainer}>
                <Input
                  style={{...style.input, width: 225 }}
                  error={!!errors.job}
                  disabled={isStudent}
                  label="Job"
                  value={values.job}
                  onChangeText={handleChange('job')}
                  onBlur={handleBlur('job')}
                  right={<TextInput.Icon name="briefcase" color="#5201ba"/>}
                  helperText={errors.job}
                  visible={!!errors.job}
                />
                <View style={style.toogle}>
                  <Text>Is student?</Text>
                  <Switch
                    value={isStudent}
                    onValueChange={() => {
                      handleSwitch()
                      setFieldValue('job', isStudent ? '' : 'Student')
                    }}
                    color="#5201ba"
                  />
                </View>
              </View>
              {isStudent && <Input
                style={style.input}
                error={!!errors.grade}
                label="Grade"
                value={values.grade}
                onChangeText={handleChange('grade')}
                onBlur={handleBlur('grade')}
                right={<TextInput.Icon name="school" color="#5201ba"/>}
                helperText={errors.grade}
                visible={!!errors.grade}
              />}
              <Input
                style={style.input}
                error={!!errors.englishLevel}
                label="English level"
                value={values.englishLevel}
                onChangeText={handleChange('englishLevel')}
                onBlur={handleBlur('englishLevel')}
                right={<TextInput.Icon name="head-lightbulb" color="#5201ba"/>}
                helperText={errors.englishLevel}
                visible={!!errors.englishLevel}
              />
              <Button
                style={{
                  margin: 20
                }}
                onPress={handleSubmit}
                mode='contained'
                color="#FA743E"
              >
                <Text style={style.buttonText}>Submit</Text>
              </Button>

          </View>
          )}
        </Formik>
      </ScrollView>
    </LinearGradient>
  )
}

const style = StyleSheet.create({
  formContainer: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 20,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    paddingTop: 10,
  },
  input: {
    fontFamily: fonts.heading,
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
  }
})

export default StudentRegister;