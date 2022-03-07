import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import Note from '../Note/Note';
import { NoteListProps } from './types';

const NoteList: React.FC<NoteListProps> = ({ notes, isRefreshing, handleRefresh }) => {
  return (
    <FlatList
      horizontal
      refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />}
      showsHorizontalScrollIndicator={false}
      data={notes}
      keyExtractor={(note) => String(note.id)}
      renderItem={({ item }) => <Note note={item} />}
      style={{ marginTop: 30 }}
    />
  );
};

export default NoteList;
