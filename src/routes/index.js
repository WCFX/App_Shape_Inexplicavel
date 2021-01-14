import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../views/Preload';
import Home from '../views/Home';
import AppTab from '../views/AppTab';

const { Navigator, Screen } = createStackNavigator();

export default () => (
  <Navigator>
    <Screen name="Home" component={Home} />
    <Screen name="Preload" component={Preload} />
    <Screen name="AppTab" component={AppTab} />
  </Navigator>
);
