import React, { useEffect, useContext } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

// import { UserContext } from '../../contexts/UserContext';

import { Container } from './styles';

const Preload = () => {
  const { navigate, reset } = useNavigation();
  // const { dispatch: userDispatch } = useContext(UserContext);

  useEffect(() => {
    reset({
      routes: [{ name: 'Home' }],
    });
  }, []);
  return <Container />;
};

export default Preload;
