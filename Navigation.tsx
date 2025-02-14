import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import IncubatorScreen from './screens/IncubatorScreen';
import Incubadora from './screens/Incubadora';
import Lcd from './screens/Lcd';
import Notificaciones from './screens/Notificaciones';
import AjustesAvanzados from './screens/AjustesAvanzados';
import SesionStart from './screens/SesionStart';
import Registro from './screens/Registro';
import { RootStackParamList } from './types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Incubator" component={IncubatorScreen} />
        <Stack.Screen name="Incubadora" component={Incubadora} />
        <Stack.Screen name="Lcd" component={Lcd} />
        <Stack.Screen name="Notificaciones" component={Notificaciones} />
        <Stack.Screen name="SesionStart" component={SesionStart} />
        <Stack.Screen name="AjustesAvanzados" component={AjustesAvanzados} />
        <Stack.Screen name="Registro" component={Registro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
