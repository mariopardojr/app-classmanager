import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import AvatarIcon from '../../assets/user-orange.svg';
import { style } from './styles';
import { StudentDetailsProps } from './types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackRoutes } from '../../routes/types';
import GoBackButton from '../../components/GoBackButton/GoBackButton';
import { Button } from 'react-native-paper';
import NoteList from '../../components/NoteList/NoteList';

const StudentDetails: React.FC<StudentDetailsProps> = ({ route }) => {
  const { student } = route.params;
  const navigation =
    useNavigation<NativeStackNavigationProp<StackRoutes, 'Student Details'>>();

  const handleNavigate = () => navigation.navigate('Home');

  return (
    <LinearGradient colors={['#5201ba', '#8a01ba']} style={{ flex: 1 }}>
      <View style={style.container}>
        <GoBackButton handleNavigate={handleNavigate} />
        <View style={style.header}>
          <View>
            <Text style={style.title}>{student.name}</Text>
            <Text style={style.text}>{`Age: ${student.age}`}</Text>
            <Text style={style.text}>{`Job: ${student.job}`}</Text>
            {!!student.grade && (
              <Text style={style.text}>{`Grade: ${student.grade}`}</Text>
            )}
            <Text style={style.text}>{`Level: ${student.englishLevel}`}</Text>
          </View>
          {student.imageUrl ? (
            <Image source={{ uri: student.imageUrl }} style={style.image} />
          ) : (
            <AvatarIcon width={150} height={150} />
          )}
        </View>
        <View style={style.notes}>
          <Text style={style.subtitle}>Notes</Text>
          <TouchableOpacity>
            <Button style={style.addButton} icon="shape-rectangle-plus">
              <Text style={{ color: '#FFF' }}>Add card</Text>
            </Button>
          </TouchableOpacity>
        </View>
        <NoteList notes={student.notes} />
      </View>
    </LinearGradient>
  );
};

export default StudentDetails;
