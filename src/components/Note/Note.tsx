import React from 'react';
import { Text, View } from 'react-native';
import { style } from './styles';
import { NoteProps } from './types';

const Note: React.FC<NoteProps> = ({ note }) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>{note.title}</Text>
      <Text style={style.text}>{note.note}</Text>
    </View>
  );
};

export default Note;
