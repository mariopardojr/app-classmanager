import React from 'react';
import { FlatList, RefreshControl, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-paper';
import Note from '../Note/Note';
import { style } from './styles';
import { NoteListProps } from './types';

const NoteList: React.FC<NoteListProps> = ({ notes, isRefreshing, handleRefresh, setEnableCard }) => {
  const handleAddCard = (): void => {
    setEnableCard(true);
  };

  return (
    <View>
      <View style={style.notesHeader}>
        <Text style={style.subtitle}>Notes</Text>
        <TouchableOpacity>
          <Button style={style.addButton} onPress={handleAddCard} icon="shape-rectangle-plus">
            <Text style={{ color: '#FFF' }}>Add</Text>
          </Button>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />}
        showsHorizontalScrollIndicator={false}
        data={notes}
        keyExtractor={(note) => String(note._id)}
        renderItem={({ item: note }) => <Note key={note._id} note={note} handleRefresh={handleRefresh} />}
        style={{ marginTop: 30 }}
      />
    </View>
  );
};

export default NoteList;
