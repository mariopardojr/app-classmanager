import { LinearGradient } from 'expo-linear-gradient';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button, IconButton, Modal, Portal, Switch } from 'react-native-paper';
import Input from '../Input/Input';
import * as Animatable from 'react-native-animatable';
import { LessonValues, LessonModalProps } from './types';
import { style as styleNoteModal } from '../NoteModal/styles';
import { style as styleLessonModal } from '../../pages/StudentRegister/styles';

import { validationSchema } from './validation';
import DateTimePicker from '../DateTimePicker/DateTimePicker';

const defaultValues: LessonValues = {
  title: '',
  date: new Date(),
  startAt: new Date(),
  endAt: new Date(),
  taught: false,
};

new Date().toDateString();

const LessonModal: React.FC<LessonModalProps> = ({
  visible: enableAddCardForm,
  setVisible: setEnableAddCardForm,
  handleSubmitButton,
  handleRefresh = () => {},
  initialValues = defaultValues,
  submitButton,
  handleDelete,
}) => {
  const [isLessonDateVisible, setLessonDateVisibility] = useState(false);
  const [isLessonTimeStartVisible, setLessonTimeStartVisibility] = useState(false);
  const [isLessonTimeEndVisible, setLessonTimeEndVisibility] = useState(false);

  const showLessonDatePicker = () => {
    setLessonDateVisibility(true);
  };

  const showLessonTimeStart = () => {
    setLessonTimeStartVisibility(true);
  };

  const showLessonTimeEnd = () => {
    setLessonTimeEndVisibility(true);
  };

  const hideLessonDatePicker = () => {
    setLessonDateVisibility(false);
  };

  const hideLessonTimeStart = () => {
    setLessonTimeStartVisibility(false);
  };

  const hideLessonTimeEnd = () => {
    setLessonTimeEndVisibility(false);
  };

  return (
    <Portal>
      <Modal visible={enableAddCardForm} onDismiss={() => setEnableAddCardForm(false)}>
        <Animatable.View animation="fadeInRight" iterationCount={1}>
          <LinearGradient colors={['#5201ba', '#8a01ba']} style={styleNoteModal.modal}>
            <View style={styleNoteModal.modalHeader}>
              <Text style={{ ...styleNoteModal.title }}>New lesson</Text>
              {handleDelete && (
                <IconButton
                  onPress={handleDelete}
                  icon="delete"
                  color="#DB2325"
                  style={{ backgroundColor: '#8a01ba' }}
                />
              )}
            </View>
            <View>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                  void handleSubmitButton(values);
                  setEnableAddCardForm(false);
                  void handleRefresh();
                  actions.resetForm();
                }}
              >
                {({ handleChange, handleSubmit, setFieldValue, values, errors, touched }) => (
                  <View>
                    <Input
                      error={!!errors.title && !!touched.title}
                      label="Title"
                      value={values.title}
                      onChangeText={handleChange('title')}
                      helperText={errors.title}
                      visible={!!errors.title && !!touched.title}
                    />
                    <DateTimePicker
                      error={!!errors.date && !!touched.date}
                      label="Date"
                      value={values.date}
                      onChangeText={handleChange}
                      field="date"
                      visible={!!errors.date && !!touched.date}
                      isDatePickerVisible={isLessonDateVisible}
                      hideDatePicker={hideLessonDatePicker}
                      showDatePicker={showLessonDatePicker}
                      setFieldValue={setFieldValue}
                    />
                    <DateTimePicker
                      error={!!errors.startAt && !!touched.startAt}
                      label="Starts at"
                      value={values.startAt}
                      onChangeText={handleChange}
                      field="startAt"
                      visible={!!errors.startAt && !!touched.startAt}
                      isDatePickerVisible={isLessonTimeStartVisible}
                      hideDatePicker={hideLessonTimeStart}
                      showDatePicker={showLessonTimeStart}
                      setFieldValue={setFieldValue}
                      mode="time"
                    />
                    <DateTimePicker
                      error={!!errors.endAt && !!touched.endAt}
                      label="Ends at"
                      value={values.endAt}
                      onChangeText={handleChange}
                      field="endAt"
                      visible={!!errors.endAt && !!touched.endAt}
                      isDatePickerVisible={isLessonTimeEndVisible}
                      hideDatePicker={hideLessonTimeEnd}
                      showDatePicker={showLessonTimeEnd}
                      setFieldValue={setFieldValue}
                      mode="time"
                    />
                    <View style={styleLessonModal.toogle}>
                      <Text style={styleLessonModal.toogleText}>Has this lesson already been taught?</Text>
                      <Switch
                        value={values.taught}
                        onValueChange={() => {
                          setFieldValue('taught', !values.taught);
                        }}
                        color="#FA743E"
                      />
                    </View>
                    <Button
                      style={styleNoteModal.modalButton}
                      mode="contained"
                      color="#DB2325"
                      onPress={() => setEnableAddCardForm(false)}
                    >
                      <Text style={{ color: '#FFF' }}>Cancel</Text>
                    </Button>
                    <Button style={styleNoteModal.modalButton} mode="contained" color="#FA743E" onPress={handleSubmit}>
                      <Text style={{ color: '#FFF' }}>{submitButton}</Text>
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

export default LessonModal;
