import {createStackNavigator} from '@react-navigation/stack';
import {useThemeStore} from '../../../../stores/theme.store';
import {darkColors, lightColors} from '../../../../theme';
import { ProductScreen } from './screens/product-detail.screen';
import { HomeScreen } from './screens/home.screen';
export type ProductsStackParams = {
  Home: undefined;
  Details: {
    productId:string
  };
};
const Stack = createStackNavigator<ProductsStackParams>();

export function ProductsNavigation() {
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
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="Details" component={ProductScreen} />
      </Stack.Navigator>
  );
}

