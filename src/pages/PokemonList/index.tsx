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
      onPress={() => navigation.navigate('AddPokemon')}
      style={styles.addBtn}>
      <MaterialIcons name="add" size={30} color={colors.white} />
    </TouchableOpacity>
  );
};

const PokemonList: React.FC = () => {
  const {userPokemons, removePokemon, viewPokemonDetails} = usePokemonContext();

  const [currentPage, setCurrentPage] = useState(1);
  const navigation = useNavigation();
  const itemsPerPage = 2;

  const loadMoreUserPokemons = useCallback(() => {
    const totalItems = userPokemons.length;
    const nextItems = totalItems - displayedPokemons.length;
    if (nextItems > 0) {
      const newItems = userPokemons.slice(
        displayedPokemons.length,
        displayedPokemons.length + Math.min(itemsPerPage, nextItems),
      );
      setDisplayedPokemons([...displayedPokemons, ...newItems]);
    }
  }, [userPokemons, displayedPokemons]);

  useEffect(() => {
    loadMoreUserPokemons();
  }, [userPokemons, loadMoreUserPokemons]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <MyButton />,
    });
  }, [navigation]);

  const handleEndReached = () => {
    loadMoreUserPokemons();
  };

  const onDelete = (id: string) => {
    removePokemon(id);
    setDisplayedPokemons(prev => prev.filter(pokemon => pokemon.id !== id));
  };

  const onViewDetails = pokemon => {
    viewPokemonDetails(pokemon);
  };

  const [displayedPokemons, setDisplayedPokemons] = useState([]);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <MyButton />,
    });
  }, [navigation]);

  const renderItem = ({item}) => (
    <Card
      key={item.name}
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
          data={displayedPokemons}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.name}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            displayedPokemons.length < userPokemons.length ? <Loader /> : null
          }
          numColumns={2}
        />
      )}
    </View>
  );
};

export default PokemonList;
