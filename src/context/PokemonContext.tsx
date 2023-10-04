import React, {createContext, useState, useContext, useEffect} from 'react';
import Pokemon from '../models/Pokemon';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface PokemonContextProps {
  userPokemons: Pokemon[];
  addPokemon: (pokemon: Pokemon) => Promise<void>;
  removePokemon: (name: string) => Promise<void>;
  selectedPokemon: Pokemon | null;
  viewPokemonDetails: (pokemon: Pokemon | null) => void;
}

const PokemonContext = createContext<PokemonContextProps>({
  userPokemons: [],
  addPokemon: async () => {},
  removePokemon: async () => {},
  selectedPokemon: null,
  viewPokemonDetails: () => {},
});

export const usePokemonContext = () => {
  return useContext(PokemonContext);
};

export const PokemonProvider: React.FC = ({children}) => {
  const [userPokemons, setUserPokemons] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  const addPokemon = async (pokemon: Pokemon) => {
    const newUserPokemons = [...userPokemons, pokemon];
    setUserPokemons(newUserPokemons);
    await AsyncStorage.setItem('userPokemons', JSON.stringify(newUserPokemons));
  };

  const removePokemon = async (name: string) => {
    const newUserPokemons = userPokemons.filter(p => p.name !== name);
    setUserPokemons(newUserPokemons);
    await AsyncStorage.setItem('userPokemons', JSON.stringify(newUserPokemons));
  };

  const viewPokemonDetails = (pokemon: Pokemon | null) => {
    setSelectedPokemon(pokemon);
  };

  useEffect(() => {
    const loadUserPokemons = async () => {
      const storedPokemons = await AsyncStorage.getItem('userPokemons');
      if (storedPokemons) {
        setUserPokemons(JSON.parse(storedPokemons));
      }
    };
    loadUserPokemons();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        userPokemons,
        addPokemon,
        removePokemon,
        selectedPokemon,
        viewPokemonDetails,
      }}>
      {children}
    </PokemonContext.Provider>
  );
};
