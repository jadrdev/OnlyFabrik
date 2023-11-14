import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { StatusBar, Platform, LogBox } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import { requestTrackingPermission } from 'react-native-tracking-transparency';

LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function App() {
  // Metodo de pedir permiso al usuario para rastrearlo
  useEffect(() => {
    (async () => {
      const { status } = await requestTrackingPermission();
      if (status === 'granted') {
        console.log('Yay! I have user permission to track data');
      }
    })();
  }, []);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#000',
      accent: '#f1c40f',
    },
  };

  return (
    <>
      <PaperProvider theme={theme}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}
