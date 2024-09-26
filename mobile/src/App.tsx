import './gesture-handler.native';
import {NavigationContainer} from '@react-navigation/native';
import {SideNavigation} from './navigations/side-navigation/side.navigation';
import {useColorScheme} from 'react-native';
import {useEffect} from 'react';
import {useThemeStore} from './stores/theme.store';
import {TanstackQuery} from './providers';

export function App(): React.JSX.Element {
  const colorScheme = useColorScheme();
  const setColorScheme = useThemeStore(state => state.setCurrentTheme);

  useEffect(() => {
    if (colorScheme == 'dark') {
      setColorScheme('dark');
    } else {
      setColorScheme('light');
    }
  }, [colorScheme]);

  return (
    <TanstackQuery>
      <NavigationContainer>
        <SideNavigation />
      </NavigationContainer>
    </TanstackQuery>
  );
}
