import React from 'react';
import { FlatList } from 'react-native';
import Note from '../Note/Note';
import { NoteListProps } from './types';

const NoteList: React.FC<NoteListProps> = ({ notes }) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={notes}
      keyExtractor={(note) => String(note.id)}
      renderItem={({ item }) => <Note note={item} />}
      style={{ marginTop: 30 }}
    />
  );
};

export default NoteList;
