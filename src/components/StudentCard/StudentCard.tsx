import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import AvatarIcon from '../../assets/user-purple.svg';
import { style } from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackRoutes } from '../../routes/types';
import { useNavigation } from '@react-navigation/native';
import { StudentCardProps } from './types';

const StudentCard: React.FC<StudentCardProps> = ({ student, ...rest }) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackRoutes, 'Student Details'>>();
  const handleNavigate = () => {
    navigation.navigate('Student Details', { studentId: student._id });
  };

  return (
    <TouchableOpacity style={style.container} {...rest} onPress={handleNavigate}>
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
