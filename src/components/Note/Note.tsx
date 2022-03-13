import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { IRawNote } from '../../services/interfaces/IRawNote';
import NoteService from '../../services/NoteService/noteService';
import NoteModal from '../NoteModal/NoteModal';
import { style } from './styles';
import { NoteProps } from './types';

const Note: React.FC<NoteProps> = ({ note, handleRefresh = () => {} }) => {
  const [enable, setEnable] = useState(false);

  const handleUpdateNote = async (noteToUpdate: IRawNote) => {
    await NoteService.updateNote({ ...note, ...noteToUpdate });
    setEnable(false);
  };

  return (
    <TouchableOpacity onPress={() => setEnable(true)}>
      <View style={style.container}>
        <Text style={style.title}>{note.title}</Text>
        <Text style={style.text}>{note.note}</Text>
      </View>
      <NoteModal
        initialValues={{
          title: note.title,
          note: note.note,
        }}
        visible={enable}
        setVisible={setEnable}
        handleSubmitButton={handleUpdateNote}
        handleRefresh={handleRefresh}
      />
    </TouchableOpacity>
  );
};

export default Note;
