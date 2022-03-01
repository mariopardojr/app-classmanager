import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Student } from '../../services/types';
import AvatarIcon from '../../assets/user-purple.svg'
import fonts from '../../styles/fonts';

interface StudentCardProps {
  student: Student
}

const StudentCard: React.FC<StudentCardProps> = ({ student, ...rest }) => {
  return (
    <TouchableOpacity style={style.container} {...rest}>
      {student.imageUrl ? <Image style={style.avatar} source={{ uri: student.imageUrl }} /> : <AvatarIcon width={55} height={55}/>}
      <Text style={style.studentName}>{student.name}</Text>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  container: {
    width: 160,
    height: 160,
    backgroundColor: '#FA743E',
    borderRadius: 20,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  studentName: {
    fontFamily: fonts.heading,
    fontSize: 16,
    color: '#fff',
    margin: 10
  }
})

export default StudentCard;