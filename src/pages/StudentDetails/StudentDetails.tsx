import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

const StudentDetails: React.FC = () => {
  return <Text style={style.text}>Student Details</Text>
}

const style = StyleSheet.create({
  text: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default StudentDetails;