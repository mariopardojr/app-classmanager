import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { style } from './styles';
import { NoteProps } from './types';

const Note: React.FC<NoteProps> = ({ note }) => {
  return (
    <TouchableOpacity>
      <View style={style.container}>
        <Text style={style.title}>{note.title}</Text>
        <Text style={style.text}>{note.note}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Note;
