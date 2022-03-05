import React from 'react';
import { Text, View } from 'react-native';
import { style } from './styles';
import { StudentDetailsProps } from './types';

const StudentDetails: React.FC<StudentDetailsProps> = ({ route }) => {
  const { student } = route.params;
  return (
    <View>
      <Text style={style.text}>Student Details</Text>
      <Text>{student.name}</Text>
    </View>
  );
};

export default StudentDetails;
