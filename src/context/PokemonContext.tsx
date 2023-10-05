import React, {createContext, useState, useContext, useEffect} from 'react';
import Pokemon from '../models/Pokemon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {fetchPokemonDetails, fetchPokemons} from '../services/PokemonService';

interface PokemonContextProps {
  userPokemons: Pokemon[];
  apiPokemons: Pokemon[];
  selectedPokemon: Pokemon | null;
  addPokemon: (pokemon: Pokemon) => Promise<void>;
  removePokemon: (id: string) => Promise<void>;
  viewPokemonDetails: (pokemon: Pokemon | null) => Promise<void>;
  fetchApiPokemons: () => Promise<void>;
  addApiPokemon: (pokemon: Pokemon) => Promise<void>;
}

const PokemonContext = createContext<PokemonContextProps>({
  userPokemons: [],
  addPokemon: async () => {},
  removePokemon: async () => {},
  selectedPokemon: null,
  viewPokemonDetails: async () => {},
  apiPokemons: [],
  fetchApiPokemons: async () => {},
  addApiPokemon: async () => {},
});

export const PokemonProvider: React.FC = ({children}) => {
  const [userPokemons, setUserPokemons] = useState<Pokemon[]>([]);
  const [apiPokemons, setApiPokemons] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  const addPokemon = async (pokemon: Pokemon) => {
    const newUserPokemons = [...userPokemons, pokemon];
    setUserPokemons(newUserPokemons);
    await AsyncStorage.setItem('userPokemons', JSON.stringify(newUserPokemons));
  };

  const removePokemon = async (id: string) => {
    const newUserPokemons = userPokemons.filter(p => p.id !== id);
    setUserPokemons(newUserPokemons);
    await AsyncStorage.setItem('userPokemons', JSON.stringify(newUserPokemons));
  };

  const fetchAndSetPokemonDetails = async (pokemon: Pokemon) => {
    try {
      if (!pokemon || !pokemon.id) {
        throw new Error('Invalid Pokémon ID');
      }
      const details = await fetchPokemonDetails(pokemon.id);
      const updatedPokemon = {
        ...pokemon,
        firstMove: details.moves[0].move.name,
        firstType: details.types[0].type.name,
        lastMove: details.moves.slice(-1)[0].move.name,
        types: details.types,
        lastFiveMoves: details.moves
          .slice(-5)
          .map(moveObj => moveObj.move.name),
      };
      setSelectedPokemon(updatedPokemon);
    } catch (error) {
      console.error(error);
    }
  };

  const viewPokemonDetails = async (pokemon: Pokemon | null) => {
    try {
      if (pokemon && pokemon.id) {
        await fetchAndSetPokemonDetails(pokemon);
      } else {
        setSelectedPokemon(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchApiPokemons = async () => {
    try {
      const pokemons = await fetchPokemons();
      setApiPokemons(pokemons);
    } catch (error) {
      console.error(error);
    }
  };

  const addApiPokemon = async (pokemon: Pokemon) => {
    const newUserPokemons = [...userPokemons, pokemon];
    setUserPokemons(newUserPokemons);
    await AsyncStorage.setItem('userPokemons', JSON.stringify(newUserPokemons));
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
        apiPokemons,
        selectedPokemon,
        addPokemon,
        addApiPokemon,
        removePokemon,
        viewPokemonDetails,
        fetchApiPokemons,
      }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error('usePokemonContext must be used within a PokemonProvider');
  }
  return context;
};
