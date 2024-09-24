import {usePermissionStore} from '../navigations/side-navigation/navigations/shipping/store/permissions.store';
import {useEffect, type PropsWithChildren} from 'react';
// import type {NavigationProp} from '@react-navigation/native';
import {AppState} from 'react-native';

export const PermissionsChecker = ({children}: PropsWithChildren) => {
  const {checkLocationPermission} = usePermissionStore();

  useEffect(() => {
    checkLocationPermission();
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'active') {
        checkLocationPermission();
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return <>{children}</>;
};
