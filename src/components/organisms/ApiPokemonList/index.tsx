import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {usePokemonContext} from '../../../context/PokemonContext';
import ApiPokemonCard from '../../molecules/ApiPokemonCard';
import styles from './styles';

const ApiPokemonListScreen: React.FC = () => {
  const {apiPokemons, fetchApiPokemons} = usePokemonContext();

  useEffect(() => {
    fetchApiPokemons();
  }, []);

  const renderItem = ({item}) => {
    return <ApiPokemonCard pokemon={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={apiPokemons}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default ApiPokemonListScreen;
