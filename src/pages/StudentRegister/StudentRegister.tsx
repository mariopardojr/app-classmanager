import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import Header from '../../components/Header/Header';


const StudentRegister: React.FC = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('')

  const handleName = (value: string) => {
    setName(value)
  }

  const handleAge = (value: string) => {
    setAge(value)
  }


  return (
    <LinearGradient colors={['#5201ba', '#8a01ba']} style={{ flex: 1 }}>
      <Header text="New student" />
      <View style={style.formContainer}>
        <TextInput
          style={style.input}
          autoComplete={false}
          label="Name"
          value={name}
          onChangeText={handleName}
          right={<TextInput.Icon name="account" color="#5201ba"/>}
        />
        <TextInput
          style={style.input}
          autoComplete={false}
          label="Age"
          value={age}
          onChangeText={handleAge}
          right={<TextInput.Icon name="calendar-clock" color="#5201ba"/>}
          keyboardType='number-pad'
        />
      </View>
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
  }
})

export default StudentRegister;