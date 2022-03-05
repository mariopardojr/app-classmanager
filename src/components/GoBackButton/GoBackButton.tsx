import React from 'react';
import { TouchableOpacity } from 'react-native';
import BackIcon from '../../assets/arrow-left.svg';
import { style } from './styles';
import { GoBackButtonProps } from './types';

const GoBackButton: React.FC<GoBackButtonProps> = ({ handleNavigate }) => {
  return (
    <TouchableOpacity onPress={handleNavigate} style={style.container}>
      <BackIcon width={50} height={50} style={style.icon} />
    </TouchableOpacity>
  );
};

export default GoBackButton;
