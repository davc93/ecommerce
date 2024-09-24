import React, {ReactNode} from 'react';
import {Pressable, PressableProps, Text} from 'react-native';
import {useThemeStore} from '../../stores/theme.store';

type NativeProps = PressableProps;
type CustomProps = {
  children: ReactNode;
  variant?: 'filled' ;
};

export const Button = ({
  children,
  variant = 'filled',
  ...props
}: NativeProps & CustomProps) => {
const buttonVariant = variantColors[variant]
  const currentTheme = useThemeStore(state => state.currentTheme);
  const theme = currentTheme == 'dark' ? 'darkColors' : 'lightColors';
  const colors = buttonVariant[theme]
  return (
    <Pressable {...props} style={(props)=>[({backgroundColor:colors.background,paddingVertical:5,borderRadius:5}),{opacity:props.pressed ? 0.8 : 1}]}>
      <Text style={{color:colors.text,fontSize:16,fontWeight:'600',textAlign:'center',textTransform:'uppercase'}}>{children}</Text>
    </Pressable>
  );
};


const variantColors = {
  filled: {
    darkColors: {
      background: '#fafafa',
      text: '#171717',
    },
    lightColors: {
      background: '#0a0a0a',
      text: '#fafafa',
    },
  },
};

