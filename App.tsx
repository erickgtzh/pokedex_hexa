import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {CounterProvider} from './src/context/CounterContext';
import {PokemonProvider} from './src/context/PokemonContext';
import StackNavigator from './src/navigation/StackNavigator';
import PokemonDetailModal from './src/components/organisms/PokemonDetailModal';

const App = () => {
  return (
    <NavigationContainer>
      <CounterProvider>
        <PokemonProvider>
          <PokemonDetailModal />
          <StackNavigator />
        </PokemonProvider>
      </CounterProvider>
    </NavigationContainer>
  );
};

export default App;
