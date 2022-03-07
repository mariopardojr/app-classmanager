import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import AvatarIcon from '../../assets/user-orange.svg';
import { style } from './styles';
import { NoteFormValues, StudentDetailsProps } from './types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackRoutes } from '../../routes/types';
import GoBackButton from '../../components/GoBackButton/GoBackButton';
import { Button, Modal, Portal, TextInput } from 'react-native-paper';
import NoteList from '../../components/NoteList/NoteList';
import { Formik } from 'formik';
import Input from '../../components/Input/Input';
import StudentService from '../../services/StudentService/studentService';
import { validationSchema } from './validation';
import * as Animatable from 'react-native-animatable';
import Utils from '../../utils/utils';

const initialValues = {
  title: '',
  note: '',
};

const StudentDetails: React.FC<StudentDetailsProps> = ({ route }) => {
  const { student } = route.params;
  const [enableAddCardForm, setEnableAddCardForm] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<StackRoutes, 'Student Details'>>();

  const handleNavigate = () => navigation.navigate('Home');

  const handleUpdateNote = (newNote: NoteFormValues) => {
    const formatNote = Utils.formatNoteToPatch(newNote);
    void StudentService.addNote(student.id, [...student.notes, formatNote]);
  };

  const handleAddCard = () => {
    setEnableAddCardForm(true);
  };

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
        <NoteList notes={student.notes} />
        <Portal>
          <Modal visible={enableAddCardForm} onDismiss={() => setEnableAddCardForm(false)}>
            <Animatable.View animation="fadeInRight" iterationCount={1}>
              <LinearGradient colors={['#5201ba', '#8a01ba']} style={style.modal}>
                <Text style={{ ...style.title, marginBottom: 20 }}>New note</Text>
                <View>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, actions) => {
                      handleUpdateNote(values);
                      actions.resetForm();
                    }}
                  >
                    {({ handleChange, handleSubmit, values, errors, touched }) => (
                      <View>
                        <Input
                          error={!!errors.title && !!touched.title}
                          label="Title"
                          value={values.title}
                          onChangeText={handleChange('title')}
                          helperText={errors.title}
                          visible={!!errors.title && !!touched.title}
                        />
                        <Input
                          error={!!errors.note && !!touched.note}
                          multiline
                          label="Note"
                          value={values.note}
                          onChangeText={handleChange('note')}
                          helperText={errors.note}
                          visible={!!errors.note && !!touched.note}
                          right={<TextInput.Affix text={`${values.note.length}/259`} />}
                        />
                        <Button
                          style={style.modalButton}
                          mode="contained"
                          color="#DB2325"
                          onPress={() => setEnableAddCardForm(false)}
                        >
                          <Text style={{ color: '#FFF' }}>Cancel</Text>
                        </Button>
                        <Button style={style.modalButton} mode="contained" color="#FA743E" onPress={handleSubmit}>
                          <Text style={{ color: '#FFF' }}>Add note</Text>
                        </Button>
                      </View>
                    )}
                  </Formik>
                </View>
              </LinearGradient>
            </Animatable.View>
          </Modal>
        </Portal>
      </View>
    </LinearGradient>
  );
};

export default StudentDetails;
