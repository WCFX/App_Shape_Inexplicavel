import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { store, persistor } from './store';

import Routes from './routes';

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <StatusBar backgroundColor="#ccc" />
        <Routes />
      </NavigationContainer>
    </PersistGate>
  </Provider>
);
