import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { Student } from '../../services/types';
import AvatarIcon from '../../assets/user-purple.svg';
import { style } from './styles';

interface StudentCardProps {
  student: Student;
}

const StudentCard: React.FC<StudentCardProps> = ({ student, ...rest }) => {
  return (
    <TouchableOpacity style={style.container} {...rest}>
      {student.imageUrl ? (
        <Image style={style.avatar} source={{ uri: student.imageUrl }} />
      ) : (
        <AvatarIcon width={55} height={55} />
      )}
      <Text style={style.studentName}>{student.name}</Text>
    </TouchableOpacity>
  );
};

export default StudentCard;
