import React, {useEffect, useState} from 'react';
import Card from '../../components/molecules/Card/Card';
import Pokemon from '../../models/Pokemon';
import {fetchPokemons} from '../../components/PokemonService';
import Loader from '../../components/atoms/Loader';
import Text from '../../components/atoms/Text';
import {FlatList, View} from 'react-native';
import styles from './styles';

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const limit = 20;

  const loadMorePokemons = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const newPokemons = await fetchPokemons(offset, limit);
      setPokemons(prevPokemons => [...prevPokemons, ...newPokemons]);
      setOffset(prevOffset => prevOffset + limit);
    } catch (error) {
      console.error('Error fetching more pokemons:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMorePokemons();
  }, []);

  if (loading && offset === 0) {
    return <Loader />;
  }

  if (pokemons.length === 0) {
    return (
      <View style={styles.notFound}>
        <Text variant="title">No pokemons found!</Text>
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
      onEndReached={loadMorePokemons}
      onEndReachedThreshold={0.5}
      ListFooterComponent={loading ? <Loader /> : null}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
};

export default PokemonList;
