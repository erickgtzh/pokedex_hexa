import React from 'react';
import {View, Text} from 'react-native';
import {usePokemonContext} from '../../../context/PokemonContext';

const PokemonCounter: React.FC = () => {
  const {userPokemons} = usePokemonContext();

  return (
    <View>
      <Text>Total Pokémons: {userPokemons.length}</Text>
    </View>
  );
};

export default PokemonCounter;
