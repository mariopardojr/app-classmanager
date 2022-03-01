import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import { Container } from './styles';

const StudentRegister: React.FC = () => {
  return (
    <View>
      <Text style={style.container}>Student Register</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default StudentRegister;