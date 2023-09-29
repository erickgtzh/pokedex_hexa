import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import {CounterProvider} from './src/context/CounterContext';

const App = () => {
  return (
    <NavigationContainer>
      <CounterProvider>
        <BottomTabNavigator />
      </CounterProvider>
    </NavigationContainer>
  );
};

export default App;
