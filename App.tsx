import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {PokemonProvider} from './src/context/PokemonContext';
import StackNavigator from './src/navigation/StackNavigator';
import PokemonDetailModal from './src/components/organisms/PokemonDetailModal';
import {UserProvider} from './src/context/UserContex';

const App = () => {
  return (
    <NavigationContainer>
      <PokemonProvider>
        <UserProvider>
          <PokemonDetailModal />
          <StackNavigator />
        </UserProvider>
      </PokemonProvider>
    </NavigationContainer>
  );
};

export default App;
