import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable} from 'react-native';
import {CustomText} from '../../../../../components/ui/custom-text';
import {CustomView} from '../../../../../components/ui/custom-view';
import { usePermissionStore } from '../store/permissions.store';
import { ShippingStackParams } from '../shipping.navigation';
import { Button } from '../../../../../components/ui/button';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<ShippingStackParams>>();
  const status = usePermissionStore(state => state.status)
  const requestLocationPermission = usePermissionStore(state => state.requestLocationPermission)
  return (
    <CustomView>
      <Button
              onPress={requestLocationPermission}>

      
      Habilitar Localización
      </Button>
      
      
      <CustomText>Estado actual: {status}</CustomText>

      <Pressable onPress={() => navigation.navigate('MapScreen')}>
        <CustomText>Map</CustomText>
      </Pressable>
    </CustomView>
  );
};
