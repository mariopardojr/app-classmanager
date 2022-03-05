import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import StudentCard from '../StudentCard/StudentCard';
import { StudentListProps } from './types';

const StudentList: React.FC<StudentListProps> = ({ students }) => {
  return (
    <View style={style.container}>
      <FlatList
        data={students}
        keyExtractor={(student) => String(student.id)}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.1}
        numColumns={2}
        renderItem={({ item: student }) => (
          <StudentCard student={student} />
        )}
      />
    </View >
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }
})

export default StudentList;