import { LinearGradient } from 'expo-linear-gradient';
import { Formik } from 'formik';
import React from 'react';
import { Text, View } from 'react-native';
import { Button, Modal, Portal, TextInput } from 'react-native-paper';
import Input from '../Input/Input';
import * as Animatable from 'react-native-animatable';
import { AddNoteModalProps } from './types';
import { style } from './styles';
import { validationSchema } from './validation';

const defaultValues = {
  title: '',
  note: '',
};

const NoteModal: React.FC<AddNoteModalProps> = ({
  visible: enableAddCardForm,
  setVisible: setEnableAddCardForm,
  handleSubmitButton,
  handleRefresh = () => {},
  initialValues = defaultValues,
}) => {
  return (
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
                  actions.resetForm();
                  void handleSubmitButton(values);
                  setEnableAddCardForm(false);
                  void handleRefresh();
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
                      right={<TextInput.Affix text={`${values.note?.length}/259`} />}
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
  );
};

export default NoteModal;
