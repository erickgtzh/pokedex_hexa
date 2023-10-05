import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SelectorCard from '../../molecules/SelectorCard';
import {colors} from '../../../utils/colors';

const AddPokemonSelector: React.FC = () => {
  const navigation = useNavigation();

  const navigateToCustomPokemon = () => {
    navigation.navigate('AddPokemon');
  };

  const navigateToApiPokemon = () => {
    navigation.navigate('ApiPokemonList');
  };

  return (
    <View style={styles.container}>
      <SelectorCard
        title="Add Custom Pokemon"
        onPress={navigateToCustomPokemon}
      />
      <SelectorCard
        title="Add Pokemon From API"
        onPress={navigateToApiPokemon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.primary,
  },
});

export default AddPokemonSelector;
