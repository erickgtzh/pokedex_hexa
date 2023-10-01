import axios from 'axios';
import Pokemon from '../models/Pokemon';
import {BASE_URL} from '../config/constants';
import {Alert} from 'react-native';

export const fetchPokemons = async (offset = 0, limit = 20) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`,
    );
    return response.data.results.map(
      (pokemon: any, index: number) =>
        new Pokemon(pokemon.name, offset + index + 1),
    );
  } catch (error) {
    Alert.alert(
      'There was an error fetching the data, please try again later.',
    );
    console.error('PokemonService', error);
    throw error;
  }
};
