import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../components/Header/Header';
import AddIcon from '../../assets/add.svg'
import fonts from '../../styles/fonts';
import StudentList from '../../components/StudentList/StudentList';
import { LinearGradient } from 'expo-linear-gradient';

const Home: React.FC = () => {
  return (
    <LinearGradient colors={['#5201ba', '#8a01ba']} style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Header image='http://lorempixel.com.br/100/100?12'/>
        <View style={style.infoContainer}>
          <View>
            <Text style={style.paragraph}>Please,</Text>
            <Text style={style.paragraph}>pick a student to view details</Text>
            <Text style={style.paragraph}>or add a new one.</Text>
          </View>
          <TouchableOpacity>
            <AddIcon width={65} />
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
