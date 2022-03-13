import { LinearGradient } from 'expo-linear-gradient';
import React, { useCallback, useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import AvatarIcon from '../../assets/user-orange.svg';
import { style } from './styles';
import { NoteFormValues, StudentDetailsProps } from './types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackRoutes } from '../../routes/types';
import GoBackButton from '../../components/GoBackButton/GoBackButton';
import { Button } from 'react-native-paper';
import NoteList from '../../components/NoteList/NoteList';
import StudentService from '../../services/StudentService/studentService';
import { IStudent } from '../../interfaces/IStudent';
import { HttpStatusCode } from '../../contracts/result/http-status-code';
import { useLoading } from '../../context/LoadingContext/loading';
import NoteService from '../../services/NoteService/noteService';
import NoteModal from '../../components/NoteModal/NoteModal';

const StudentDetails: React.FC<StudentDetailsProps> = ({ route }) => {
  const { studentId } = route.params;
  const [student, setStudent] = useState<IStudent>({} as IStudent);
  const [notes, setNotes] = useState([]);
  const [enableAddCardForm, setEnableAddCardForm] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { startLoading, stopLoading } = useLoading();
  const navigation = useNavigation<NativeStackNavigationProp<StackRoutes, 'Student Details'>>();

  const fetchStudent = async () => {
    const { status, student: data } = await StudentService.getStudentById(studentId);

    if (status !== HttpStatusCode.SUCCESS) {
      navigation.navigate('Home');
      return;
    }
    setStudent(data);
  };

  const fetchNotes = async () => {
    const { notes: studentNotes } = await NoteService.getNotesByStudentId(studentId);
    setNotes(studentNotes);
  };

  const handleNavigate = () => navigation.navigate('Home');

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchStudent();
    await fetchNotes();
    setIsRefreshing(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [studentId]);

  const handleAddCard = () => {
    setEnableAddCardForm(true);
  };

  const handleCreateNote = async (values: NoteFormValues) => {
    await NoteService.createNote({ ...values, studentId: studentId });
    setEnableAddCardForm(false);
  };

  useEffect(() => {
    startLoading();
    void (async () => {
      await fetchStudent();
    })();
    stopLoading();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation, startLoading, stopLoading, studentId]);

  useEffect(() => {
    void (async () => {
      await fetchNotes();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [studentId]);

  return (
    <LinearGradient colors={['#5201ba', '#8a01ba']} style={{ flex: 1 }}>
      <View style={style.container}>
        <GoBackButton handleNavigate={handleNavigate} />
        <View style={style.header}>
          <View>
            <Text style={style.title}>{student.name}</Text>
            <Text style={style.text}>{`Age: ${student.age}`}</Text>
            <Text style={style.text}>{`Job: ${student.job}`}</Text>
            {!!student.grade && <Text style={style.text}>{`Grade: ${student.grade}`}</Text>}
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
            <Button style={style.addButton} onPress={handleAddCard} icon="shape-rectangle-plus">
              <Text style={{ color: '#FFF' }}>Add note</Text>
            </Button>
          </TouchableOpacity>
        </View>
        <NoteList notes={notes} isRefreshing={isRefreshing} handleRefresh={handleRefresh} />
        <NoteModal
          visible={enableAddCardForm}
          setVisible={setEnableAddCardForm}
          handleSubmitButton={handleCreateNote}
          handleRefresh={handleRefresh}
        />
      </View>
    </LinearGradient>
  );
};

export default StudentDetails;
