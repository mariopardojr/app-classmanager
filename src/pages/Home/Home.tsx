import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../components/Header/Header';
import AddIcon from '../../assets/add.svg'
import fonts from '../../styles/fonts';
import StudentList from '../../components/StudentList/StudentList';
import { LinearGradient } from 'expo-linear-gradient';
import { HomeProps } from './types';

const Home: React.FC<HomeProps> = ({ navigation }) => {

  const handleNavigateToRegister = () => navigation.navigate('Student Register')

  return (
    <LinearGradient colors={['#5201ba', '#8a01ba']} style={{ flex: 1 }}>
        <View style={{ paddingTop: 40, flex: 1 }}>
          <Header image='http://lorempixel.com.br/100/100?12' username='User'/>
          <View style={style.infoContainer}>
            <View>
              <Text style={style.paragraph}>Please,</Text>
              <Text style={style.paragraph}>pick a student to view details</Text>
              <Text style={style.paragraph}>or add a new one.</Text>
            </View>
            <TouchableOpacity onPress={handleNavigateToRegister}>
              <AddIcon width={65}/>
            </TouchableOpacity>
          </View>
          <StudentList />
        </View>
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  paragraph: {
    fontSize: 18,
    fontFamily: fonts.text,
    color: '#fff'
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  }
})

export default Home;
