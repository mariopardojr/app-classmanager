import React from 'react';
import { Image, Text, View } from 'react-native';
import { HeaderProps } from './types';
import AvatarIcon from '../../assets/user-orange.svg';
import { style } from './styles';

const Header: React.FC<HeaderProps> = ({
  text = 'Hello, ',
  username,
  image,
}) => {
  return (
    <View style={style.container}>
      <View>
        {text && <Text style={style.greeting}>{text}</Text>}
        {username && <Text style={style.username}>{username}</Text>}
      </View>
      {image ? (
        <Image
          source={{ uri: image }}
          style={{ width: 120, height: 120, borderRadius: 100 }}
        />
      ) : (
        <AvatarIcon width={150} height={150} />
      )}
    </View>
  );
};

export default Header;
