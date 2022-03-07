import React from 'react';
import { Image, Text, View } from 'react-native';
import { HeaderProps } from './types';
import AvatarIcon from '../../assets/user-orange.svg';
import { style } from './styles';
import * as Animatable from 'react-native-animatable';

const Header: React.FC<HeaderProps> = ({ text = 'Hello, ', username, image }) => {
  return (
    <Animatable.View style={style.container} animation="fadeInRight" iterationCount={1}>
      <View>
        {text && <Text style={style.greeting}>{text}</Text>}
        {username && <Text style={style.username}>{username}</Text>}
      </View>
      {image ? <Image source={{ uri: image }} style={style.avatar} /> : <AvatarIcon width={150} height={150} />}
    </Animatable.View>
  );
};

export default Header;
