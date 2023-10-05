import React, {useState, useEffect, useCallback} from 'react';
import {FlatList, View} from 'react-native';
import {usePokemonContext} from '../../context/PokemonContext';
import Card from '../../components/molecules/Card/Card';
import styles from './styles';
import Text from '../../components/atoms/Text';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../utils/colors';
import Loader from '../../components/atoms/Loader';

const MyButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('AddPokemonSelector')}
      style={styles.addBtn}>
      <MaterialIcons name="add" size={30} color={colors.white} />
    </TouchableOpacity>
  );
};

const PokemonList: React.FC = () => {
  const {userPokemons, removePokemon, viewPokemonDetails} = usePokemonContext();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <MyButton />,
    });
  }, [navigation]);

  const onDelete = (id: string) => {
    removePokemon(id);
  };

  const onViewDetails = pokemon => {
    viewPokemonDetails(pokemon);
  };

  const renderItem = ({item}) => (
    <Card
      key={item.id}
      name={item.name}
      imageUrl={item.imageUrl}
      firstType={item.firstType}
      firstMove={item.firstMove}
      lastMove={item.lastMove}
      onDelete={() => onDelete(item.id)}
      onViewDetails={() => onViewDetails(item)}
    />
  );

  return (
    <View style={styles.container}>
      {userPokemons.length === 0 ? (
        <Text variant="subtitle" style={styles.noPokemon}>
          There are no pokémons yet. Please add one by clicking on the right
          corner button.
        </Text>
      ) : (
        <FlatList
          data={userPokemons}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item?.id || String(Math.random())}
          numColumns={2}
        />
      )}
    </View>
  );
};

export default PokemonList;
