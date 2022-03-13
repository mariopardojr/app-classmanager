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
      keyExtractor={(note) => String(note._id)}
      renderItem={({ item: note }) => <Note key={note._id} note={note} handleRefresh={handleRefresh} />}
      style={{ marginTop: 30 }}
    />
  );
};

export default NoteList;
