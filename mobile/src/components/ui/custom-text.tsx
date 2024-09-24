import React from 'react';
import {Text, View, type TextProps} from 'react-native';
import {useThemeStore} from '../../stores/theme.store';

interface Props extends TextProps {}

export const CustomText = ({style,...props}: Props) => {
  const currentTheme = useThemeStore(state => state.currentTheme);
  const isDark = currentTheme === 'dark';
  const colors = isDark ? darkColors : lightColors;

  return <Text style={[style,{color:colors.color}]} {...props}></Text>;
};

const darkColors = {
  color: 'white',
};
const lightColors = {
  color: 'black',
};
