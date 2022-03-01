import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { getStudents } from '../../services/studentService';
import { Student } from '../../services/types';
import StudentCard from '../StudentCard/StudentCard';

const StudentList: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getStudents()
      setStudents(data)
    }
    fetchData()
  }, [])

  return (
    <SafeAreaView style={style.container}>
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
    </SafeAreaView >
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }
})

export default StudentList;