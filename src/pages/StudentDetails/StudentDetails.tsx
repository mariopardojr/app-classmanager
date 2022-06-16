import { LinearGradient } from 'expo-linear-gradient';
import React, { useCallback, useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import AvatarIcon from '../../assets/user-orange.svg';
import { style } from './styles';
import { NoteFormValues, StudentDetailsProps } from './types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackRoutes } from '../../routes/types';
import GoBackButton from '../../components/GoBackButton/GoBackButton';
import NoteList from '../../components/NoteList/NoteList';
import StudentService from '../../services/StudentService/studentService';
import { IStudent } from '../../interfaces/IStudent';
import { HttpStatusCode } from '../../contracts/result/http-status-code';
import { useLoading } from '../../context/LoadingContext/loading';
import NoteService from '../../services/NoteService/noteService';
import NoteModal from '../../components/NoteModal/NoteModal';
import Lessons from '../../components/Lessons/Lessons';
import LessonModal from '../../components/LessonModal/LessonModal';
import LessonService from '../../services/LessonService/LessonService';
import { LessonValues } from '../../components/LessonModal/types';

const StudentDetails: React.FC<StudentDetailsProps> = ({ route }) => {
  const { studentId } = route.params;
  const [student, setStudent] = useState<IStudent>({} as IStudent);
  const [notes, setNotes] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [enableAddCardForm, setEnableAddCardForm] = useState(false);
  const [enableAddLessonForm, setEnableAddLessonForm] = useState(false);
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

  const fetchLessons = async () => {
    const { lessons: studentLessons } = await LessonService.getLessonsByStudentId(studentId);
    setLessons(studentLessons);
  };

  const handleNavigate = () => navigation.navigate('Home');

  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);
    void Promise.all([fetchStudent(), fetchNotes(), fetchLessons()]);
    setIsRefreshing(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [studentId]);

  const handleCreateNote = async (values: NoteFormValues) => {
    await NoteService.createNote({ ...values, studentId: studentId });
    setEnableAddCardForm(false);
  };

  const handleCreateLesson = async (values: LessonValues) => {
    await LessonService.createLesson({
      ...values,
      date: new Date(values.date),
      startAt: new Date(values.startAt),
      endAt: new Date(values.endAt),
      studentId: studentId,
    });
    setEnableAddLessonForm(false);
  };

  useEffect(() => {
    startLoading();
    void (() => {
      void Promise.all([fetchStudent(), fetchNotes(), fetchLessons()]);
    })();
    stopLoading();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation, startLoading, stopLoading, studentId]);

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
        <NoteList
          notes={notes}
          isRefreshing={isRefreshing}
          handleRefresh={handleRefresh}
          setEnableCard={setEnableAddCardForm}
        />
        <NoteModal
          visible={enableAddCardForm}
          setVisible={setEnableAddCardForm}
          handleSubmitButton={handleCreateNote}
          handleRefresh={handleRefresh}
        />
        <Lessons
          lessons={lessons}
          isRefreshing={isRefreshing}
          handleRefresh={handleRefresh}
          setEnableCard={setEnableAddLessonForm}
        />
        <LessonModal
          visible={enableAddLessonForm}
          setVisible={setEnableAddLessonForm}
          handleSubmitButton={handleCreateLesson}
          handleRefresh={handleRefresh}
          submitButton="Add lesson"
        />
      </View>
    </LinearGradient>
  );
};

export default StudentDetails;
