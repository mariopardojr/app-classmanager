import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import fonts from '../../styles/fonts';
import { HeaderProps } from './types';
import AvatarIcon from '../../assets/user-orange.svg'

const Header: React.FC<HeaderProps> = ({
  text = 'Hello, ',
  username = 'User',
  image
}) => {
  return (
    <View style={style.container}>
      <View>
        {text && <Text style={style.greeting}>{text}</Text>}
        {username && <Text style={style.username}>{username}</Text>}
      </View>
      {image ? <Image source={{uri: image}} style={{ width: 120, height: 120, borderRadius: 100 }} /> : <AvatarIcon width={150} height={150}/>}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 60
  },
  greeting: {
    fontFamily: fonts.text,
    fontSize: 32,
    color: '#fff',
  },
  username: {
    fontFamily: fonts.heading,
    fontSize: 32,
    color: '#fff'
  }
})

export default Header;
