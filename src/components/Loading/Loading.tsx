import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, Modal } from 'react-native';
import { View } from 'react-native-animatable';
import { useLoading } from '../../context/LoadingContext/loading';

const Loading: React.FC = () => {
  const { isLoading } = useLoading();

  return (
    <Modal visible={isLoading}>
      <LinearGradient colors={['#5201ba', '#8a01ba']} style={{ flex: 1 }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../../assets/loading.gif')} />
        </View>
      </LinearGradient>
    </Modal>
  );
};

export default Loading;
