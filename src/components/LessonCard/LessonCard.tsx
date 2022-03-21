import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { style } from './styles';
import { LessonCardProps } from './types';

const LessonCard: React.FC<LessonCardProps> = ({ lesson }) => {
  return (
    <View style={style.container}>
      <TouchableOpacity style={{ justifyContent: 'space-between', padding: 15, flex: 1 }}>
        <Text style={style.description}>{lesson.description}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={style.text}>{`📆 ${lesson.date}`}</Text>
          <Text style={style.text}>{`🕒 ${lesson.duration}`}</Text>
        </View>
      </TouchableOpacity>
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
          {lesson.done ? '📝' : '📍'}
        </Text>
        <Text style={{ color: '#FFF' }}>{lesson.done ? 'Taught' : 'Not taught'}</Text>
      </View>
    </View>
  );
};

export default LessonCard;
