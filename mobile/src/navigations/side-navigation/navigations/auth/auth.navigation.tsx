import {createStackNavigator} from '@react-navigation/stack';
import {useThemeStore} from '../../../../stores/theme.store';
import {darkColors, lightColors} from '../../../../theme';
import { LoginScreen } from './screens/login/login.screen';
import { RegisterScreen } from './screens/register/register.screen';

export type AuthStackParams = {
  Login: undefined;
  Register: undefined;
};
const Stack = createStackNavigator<AuthStackParams>();

export function AuthNavigation() {
  const currentTheme = useThemeStore(state => state.currentTheme);
  const isDark = currentTheme === 'dark';
  const colors = isDark ? darkColors : lightColors;

  return (
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
        {/* <Stack.Screen options={{cardStyleInterpolator:fadeAnimation}} name="Register" component={RegisterScreen} /> */}
        <Stack.Screen name="Register" component={RegisterScreen} />

        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
  );
}
