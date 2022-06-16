import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-paper';
import fonts from '../../styles/fonts';
import LessonCard from '../LessonCard/LessonCard';
import { style } from './styles';
import { LessonProps, Months } from './types';

const Lessons: React.FC<LessonProps> = ({ setEnableCard, lessons, handleRefresh }) => {
  const date = new Date();

  const handleAddCard = (): void => {
    setEnableCard(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={style.container}>
        <View style={style.lessonsHeader}>
          <Text style={style.subtitle}>Lessons</Text>
          <TouchableOpacity>
            <Button style={style.addButton} onPress={handleAddCard} icon="shape-rectangle-plus">
              <Text style={{ color: '#FFF' }}>Add</Text>
            </Button>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ ...style.subtitle, fontFamily: fonts.text }}>{`${
            Months[date.getMonth()]
          }/${date.getFullYear()}`}</Text>
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={lessons}
        keyExtractor={(note) => String(note._id)}
        renderItem={({ item }) => <LessonCard handleRefresh={handleRefresh} lesson={item} />}
      />
    </View>
  );
};

export default Lessons;
