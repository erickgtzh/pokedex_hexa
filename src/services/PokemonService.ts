import axios from 'axios';
import Pokemon from '../models/Pokemon';
import {BASE_URL} from '../config/constants';
import {Alert} from 'react-native';

export const fetchPokemons = async (offset = 0, limit = 20) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`,
    );
    if (response.data && response.data.results) {
      return response.data.results.map(
        (pokemon, index) =>
          new Pokemon(
            index.toString(),
            pokemon.name,
            index + 1,
            [],
            '',
            '',
            [],
          ),
      );
    } else {
      throw new Error('Invalid API response structure');
    }
  } catch (error) {
    console.error('PokemonService', error);
    Alert.alert(
      'There was an error fetching the data, please try again later.',
    );
    throw error;
  }
};

export const fetchPokemonDetails = async (id: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
