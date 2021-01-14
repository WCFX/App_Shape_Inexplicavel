import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import UserContextProvider from './contexts/UserContext';

import Routes from './routes';

export default () => (
  <UserContextProvider>
    <NavigationContainer>
      <StatusBar backgroundColor="#ccc" />
      <Routes />
    </NavigationContainer>
  </UserContextProvider>
);
