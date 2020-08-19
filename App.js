import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import firebase from './src/database/firebaseConnection';
import Routes from './src/Pages/index';

console.disableYellowBox=true;

export default function App() {
  return (
    <NavigationContainer>
    <Routes />
    </NavigationContainer>
  );
}

