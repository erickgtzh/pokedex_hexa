import React from 'react';
import {View, Modal, TouchableOpacity} from 'react-native';
import {usePokemonContext} from '../../../context/PokemonContext';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../../utils/colors';
import Text from '../../atoms/Text';

const renderTypes = types => {
  return types.map(typeObj => typeObj.type.name).join(', ');
};

const PokemonDetailModal: React.FC = () => {
  const {selectedPokemon, viewPokemonDetails, addPokemon} = usePokemonContext();

  const handleClose = () => {
    viewPokemonDetails(null);
  };

  const handleAddToPokedex = () => {
    if (selectedPokemon) {
      addPokemon(selectedPokemon);
      handleClose();
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={!!selectedPokemon}
      onRequestClose={handleClose}>
      <View style={styles.modalView}>
        <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
          <MaterialIcons name="close" size={30} color={colors.white} />
        </TouchableOpacity>
        {selectedPokemon && (
          <>
            <Text style={styles.title}>{selectedPokemon.name}</Text>
            <Text style={styles.text}>
              First Type: {selectedPokemon.firstType || 'N/A'}
            </Text>
            <Text style={styles.text}>
              First Move: {selectedPokemon.firstMove || 'N/A'}
            </Text>
            <Text style={styles.text}>
              Last Move: {selectedPokemon.lastMove || 'N/A'}
            </Text>
            <Text style={styles.text}>
              Last 5 Moves:{' '}
              {selectedPokemon.lastFiveMoves
                ? selectedPokemon.lastFiveMoves.join(', ')
                : 'N/A'}
            </Text>
            <TouchableOpacity onPress={handleAddToPokedex}>
              <Text
                style={[styles.text, {color: colors.white, marginTop: 20}]}
                variant="title">
                Add to Pokedex +
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </Modal>
  );
};

export default PokemonDetailModal;
