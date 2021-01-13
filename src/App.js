import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

export default () => (
  <NavigationContainer>
    <StatusBar backgroundColor="#ccc" />
    <Routes />
  </NavigationContainer>
);
