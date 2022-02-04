import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { StatusBar, Platform, LogBox } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
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

  return (
    <>
      <PaperProvider>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}
