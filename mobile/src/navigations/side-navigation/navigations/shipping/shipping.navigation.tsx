import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './screens/home.screen';
import {MapsScreen} from './screens/map.screen';
import {useThemeStore} from '../../../../stores/theme.store';
import {darkColors, lightColors} from '../../../../theme';
import {PermissionsChecker} from '../../../../providers/permission-checker';

export type ShippingStackParams = {
  HomeScreen: undefined;
  MapScreen: undefined;
};
const Stack = createStackNavigator<ShippingStackParams>();

export function ShippingNavigation() {
  const currentTheme = useThemeStore(state => state.currentTheme);
  const isDark = currentTheme === 'dark';
  const colors = isDark ? darkColors : lightColors;

  return (
    <PermissionsChecker>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.background,
            borderBottomColor: '#666', // Border color for the header
            borderBottomWidth: 1,
            borderTopWidth: 1,
            borderTopColor: '#666', // Width of the bottom border
          },
          headerTintColor: colors.primary,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="MapScreen" component={MapsScreen} />
      </Stack.Navigator>
    </PermissionsChecker>
  );
}
