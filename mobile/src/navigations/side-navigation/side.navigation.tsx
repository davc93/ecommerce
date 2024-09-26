import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from './screens/home/home.screen';
import { ShippingNavigation } from './navigations/shipping/shipping.navigation';
import { useThemeStore } from '../../stores/theme.store';
import { darkColors, lightColors } from '../../theme';
import { AuthNavigation } from './navigations/auth/auth.navigation';



export type RootSideParams = {
  Home:undefined,
  Auth:undefined,
  Shipping:undefined,


}

const Drawer = createDrawerNavigator<RootSideParams>();

export function SideNavigation() {
  const currentTheme = useThemeStore(state => state.currentTheme);
  const isDark = currentTheme === 'dark';
  const colors = isDark ? darkColors : lightColors;

  return (
    <Drawer.Navigator screenOptions={{
      drawerStyle:{
        backgroundColor:colors.background,
      
      },
      drawerActiveTintColor:colors.primary,
      drawerInactiveTintColor:colors.text,
      drawerActiveBackgroundColor:'#a3a3a3',
      headerStyle:{
        backgroundColor:colors.background,
        
      },
      headerTintColor:colors.primary
      
    }} >
      <Drawer.Screen  name="Home" component={HomeScreen} />
      <Drawer.Screen name="Shipping" component={ShippingNavigation} />
      <Drawer.Screen name="Auth" component={AuthNavigation} />

    </Drawer.Navigator>
  );
}

