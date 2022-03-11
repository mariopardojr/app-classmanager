import React, { useCallback, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Header from '../../components/Header/Header';
import AddIcon from '../../assets/add.svg';
import StudentList from '../../components/StudentList/StudentList';
import { LinearGradient } from 'expo-linear-gradient';
import { HomeProps } from './types';
import { useIsFocused } from '@react-navigation/native';
import { style } from './styles';
import { useStudent } from '../../context/StudentContext/student';
import { useUser } from '../../context/UserContext/user';

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const handleNavigateToRegister = () => navigation.navigate('Student Register');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { user } = useUser();
  const { students, refreshStudents } = useStudent();
  const isFocused = useIsFocused();

  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);
    refreshStudents;
    setIsRefreshing(false);
  }, [refreshStudents]);

  useEffect(() => {
    if (isFocused) {
      refreshStudents();
    }
  }, [isFocused, refreshStudents]);

  return (
    <LinearGradient colors={['#5201ba', '#8a01ba']} style={{ flex: 1 }}>
      <View style={style.container}>
        <Header image="http://lorempixel.com.br/100/100?12" username={user.name.split(' ')[0] || 'User'} />
        <View style={style.infoContainer}>
          <View>
            <Text style={style.paragraph}>Please,</Text>
            <Text style={style.paragraph}>pick a student to view details</Text>
            <Text style={style.paragraph}>or add a new one.</Text>
          </View>
          <TouchableOpacity onPress={handleNavigateToRegister}>
            <AddIcon width={65} />
          </TouchableOpacity>
        </View>
        <StudentList students={students} isRefreshing={isRefreshing} handleRefresh={handleRefresh} />
      </View>
    </LinearGradient>
  );
};

export default Home;
