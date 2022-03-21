import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-paper';
import fonts from '../../styles/fonts';
import LessonCard from '../LessonCard/LessonCard';
import { style } from './styles';
import { Months } from './types';

const Lessons: React.FC = () => {
  const lessons = [
    {
      _id: '1',
      date: '20/03/2022',
      done: true,
      description: 'Lesson 1',
      duration: '9:00 - 10:00',
    },
    {
      _id: '2',
      date: '20/03/2022',
      done: false,
      description: 'Lesson 2',
      duration: '9:00 - 10:00',
    },
    {
      _id: '3',
      date: '20/03/2022',
      done: false,
      description: 'Lesson 3',
      duration: '9:00 - 10:00',
    },
  ];

  const date = new Date();

  return (
    <View style={{ flex: 1 }}>
      <View style={style.container}>
        <View style={style.lessonsHeader}>
          <Text style={style.subtitle}>Lessons</Text>
          <TouchableOpacity>
            <Button style={style.addButton} onPress={() => {}} icon="shape-rectangle-plus">
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
        renderItem={({ item }) => <LessonCard lesson={item} />}
      />
    </View>
  );
};

export default Lessons;
