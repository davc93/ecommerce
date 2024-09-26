import React from 'react';
import {Text, View} from 'react-native';
import {CustomView} from '../../../../../../components/ui/custom-view';
import {TextInput} from '../../../../../../components/ui/text-input';
import {Button} from '../../../../../../components/ui/button';
import {CustomText} from '../../../../../../components/ui/custom-text';
import {useNavigation} from '@react-navigation/native';

export const LoginScreen = () => {
  
  const navigate = useNavigation();
  const handleCreateAccount = () => {
    navigate.navigate('Register');
  };
  return (
    <CustomView>
      <CustomText>Login</CustomText>
      <TextInput secureTextEntry autoCapitalize="none" placeholder="Email" />
      <TextInput secureTextEntry autoCapitalize="none" placeholder="Password" />
      {/* <Text>LoginScreen</Text> */}
      <Button>Login</Button>
      <View>
        <CustomText>Dont have account?</CustomText>
        <CustomText onPress={handleCreateAccount} style={{color: 'blue'}}>
          create one
        </CustomText>
      </View>
    </CustomView>
  );
};
