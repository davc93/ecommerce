import React, { ReactNode } from 'react';
import {Text, View} from 'react-native';
import {useThemeStore} from '../../stores/theme.store';

interface Props {
  children:ReactNode
}

export const CustomView = (props:Props) => {
  const currentTheme = useThemeStore(state => state.currentTheme);
  const isDark = currentTheme === 'dark';
  const colors = isDark ? darkColors : lightColors;
  return (
    <View
      {...props}
      style={[
        {backgroundColor: colors.background},
        {flex: 1, paddingHorizontal: 20},
      ]}>
    </View>
  );
};

const darkColors = {
  background: '#000',
};
const lightColors = {
  background: '#fff',
};
