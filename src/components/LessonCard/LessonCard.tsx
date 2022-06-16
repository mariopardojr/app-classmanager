import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import LessonService from '../../services/LessonService/LessonService';
import { style } from './styles';
import { LessonCardProps } from './types';

const LessonCard: React.FC<LessonCardProps> = ({ lesson, handleRefresh }) => {
  const handleTaught = async () => {
    await LessonService.updateLesson({ ...lesson, taught: !lesson.taught });
    handleRefresh();
  };

  return (
    <View style={style.container}>
      <TouchableOpacity style={{ justifyContent: 'space-between', padding: 15, flex: 1 }}>
        <Text style={style.description}>{lesson.title}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={style.text}>{`📆 ${new Date(lesson.date).toLocaleDateString()}`}</Text>
          <Text style={style.text}>{`🕒 ${new Date(lesson.date).toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
            second: undefined,
          })} - ${new Date(lesson.date).toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
            second: undefined,
          })}`}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPressIn={handleTaught}>
        <View
          style={{
            height: 100,
            width: 100,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#6400e6',
            borderRadius: 12,
            position: 'relative',
            zIndex: 999,
          }}
        >
          <Text
            style={{
              color: '#FFF',
              fontSize: 20,
            }}
          >
            {lesson.taught ? '📝' : '📍'}
          </Text>
          <Text style={{ color: '#FFF' }}>{lesson.taught ? 'Taught' : 'Not taught'}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LessonCard;
