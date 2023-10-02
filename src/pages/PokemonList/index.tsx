import React, {useCallback, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import Card from '../../components/molecules/Card/Card';
import {fetchPokemons} from '../../components/PokemonService';
import Loader from '../../components/atoms/Loader';
import styles from './styles';
import Pokemon from '../../models/Pokemon';

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const itemsPerPage = 20;

  const loadMorePokemons = useCallback(async () => {
    if (loading || !hasMore) {
      return;
    }
    setLoading(true);
    try {
      const newPokemons = await fetchPokemons(offset, itemsPerPage);
      if (newPokemons.length === 0) {
        setHasMore(false);
      } else {
        setPokemons(prev => [...prev, ...newPokemons]);
        setOffset(prevOffset => prevOffset + itemsPerPage);
        setCurrentPage(prevPage => prevPage + 1);
      }
    } catch (error) {
      console.error('Error fetching more pokemons:', error);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, offset]);

  useEffect(() => {
    loadMorePokemons();
  }, [loadMorePokemons]);

  const handleEndReached = () => {
    if (currentPage * itemsPerPage <= pokemons.length) {
      loadMorePokemons();
    }
  };

  const renderItem = useCallback(
    ({item}: {item: Pokemon}) => (
      <Card key={item.name} name={item.name} imageUrl={item.imageUrl} />
    ),
    [],
  );

  return (
    <FlatList
      data={pokemons}
      renderItem={renderItem}
      keyExtractor={item => item.name}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.5}
      ListFooterComponent={loading ? <Loader /> : null}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
};

export default PokemonList;
