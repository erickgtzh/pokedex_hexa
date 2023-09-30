import React, {useEffect, useState} from 'react';
import Card from '../../components/molecules/Card/Card';
import Pokemon from '../../models/Pokemon';
import {fetchPokemons} from '../../components/PokemonService';
import Loader from '../../components/atoms/Loader';
import Text from '../../components/atoms/Text';
import {FlatList, View} from 'react-native';
import styles from './styles';

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        setLoading(true);
        const pokemonsList = await fetchPokemons();
        setPokemons(pokemonsList);
      } catch (error) {
        console.error('Error fetching pokemons:', error);
      } finally {
        setLoading(false);
      }
    };

    getPokemons();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (!pokemons) {
    return (
      <View style={styles.notFound}>
        <Text>No pokemons found!</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={pokemons}
      renderItem={({item}) => (
        <Card key={item.name} name={item.name} imageUrl={item.imageUrl} />
      )}
      keyExtractor={item => item.name}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
};

export default PokemonList;
