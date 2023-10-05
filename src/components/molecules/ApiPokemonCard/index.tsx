// ApiPokemonCard.tsx
import React from 'react';
import {View, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {usePokemonContext} from '../../../context/PokemonContext';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../../utils/colors';
import Pokemon from '../../../models/Pokemon';
import {DEFAULT_POKEMON_IMAGE} from '../../../config/constants';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';
import {fetchPokemonDetails} from '../../../services/PokemonService';

const ApiPokemonCard: React.FC<{pokemon: Pokemon}> = ({pokemon}) => {
  const {addApiPokemon, viewPokemonDetails, userPokemons} = usePokemonContext();

  const updatedImageUrl = pokemon.imageUrl.replace(
    /(\d+)\.svg$/,
    (match, number) => {
      return `${parseInt(number) + 1}.svg`;
    },
  );

  const handleAddPokemon = () => {
    fetchPokemonDetails(pokemon.name).then(details => {
      const newPokemon = {
        id: Number(userPokemons.length + 1).toString(),
        name: details.name,
        imageUrl: pokemon.imageUrl,
        firstMove: details.moves[0].move.name,
        firstType: details.types[0].type.name,
        lastMove: details.moves.slice(-1)[0].move.name,
        lastFiveMoves: details.moves
          .slice(-5)
          .map(moveObj => moveObj.move.name),
      };
      addApiPokemon(newPokemon);
    });
    Alert.alert('Pokemon added successfully!');
  };

  const handleViewDetails = () => {
    viewPokemonDetails({...pokemon, id: Number(pokemon.id + 1).toString()});
  };

  return (
    <View style={styles.card}>
      <View>
        {pokemon.imageUrl ? (
          <Image src={updatedImageUrl} size="sm" type="svg" />
        ) : (
          DEFAULT_POKEMON_IMAGE
        )}
        <Text style={styles.name}>{pokemon.name}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity onPress={handleAddPokemon} style={styles.icon}>
          <MaterialIcons name="add" size={30} color={colors.white} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleViewDetails} style={styles.icon}>
          <MaterialIcons name="info" size={30} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    padding: 16,
    margin: 8,
    borderRadius: 8,
    elevation: 2,
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  actions: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    backgroundColor: colors.accent,
    borderRadius: 50,
    padding: 5,
    margin: 5,
  },
});

export default ApiPokemonCard;
