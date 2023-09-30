import axios from 'axios';
import Pokemon from '../models/Pokemon';
import {BASE_URL} from '../config/constants';
import {Alert} from 'react-native';

export const fetchPokemons = async (
  offset = 0,
  limit = 20,
): Promise<Pokemon[]> => {
  try {
    const response = await axios.get(
      `${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`,
    );

    return response.data.results.map((pokemon: any, index: number) => {
      const number = offset + index + 1;
      return new Pokemon(pokemon.name, number);
    });
  } catch (error) {
    Alert.alert(
      'Hubo un error obteniendo la lista, por favor, intenta nuevamente',
    );
    console.error('PokemonService', error);
    throw error;
  }
};
