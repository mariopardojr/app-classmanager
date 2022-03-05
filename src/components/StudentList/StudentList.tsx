import React from 'react';
import { FlatList, RefreshControl, View } from 'react-native';
import { style } from './styles';
import StudentCard from '../StudentCard/StudentCard';
import { StudentListProps } from './types';

const StudentList: React.FC<StudentListProps> = ({
  students,
  isRefreshing,
  handleRefresh,
}) => {
  return (
    <View style={style.container}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
        data={students}
        keyExtractor={(student) => String(student.id)}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({ item: student }) => <StudentCard student={student} />}
      />
    </View>
  );
};

export default StudentList;
