import {PropsWithChildren, useEffect} from 'react';
import {useAuthStore} from '../stores/auth.store';
import {useNavigation} from '@react-navigation/native';

export const AuthProvider = (props: PropsWithChildren) => {
  const status = useAuthStore(state => state.status);
  const checkStatus = undefined;
  const navigation = useNavigation();
  useEffect(() => {
    checkStatus();
  }, []);

  useEffect(() => {
    if (status !== 'checking') {
      if (status == 'authenticated') {
        navigation.reset({
          index: 0,
          routes: [{name: 'HomeScreen'}],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{name: 'LoginScreen'}],
        });
      }
    }

  }, [status]);

  return <>{props.children}</>;
};
