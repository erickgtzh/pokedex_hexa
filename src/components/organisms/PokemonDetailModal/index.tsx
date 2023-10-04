import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {usePokemonContext} from '../../../context/PokemonContext';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../../utils/colors';

const PokemonDetailModal: React.FC = () => {
  const {selectedPokemon, viewPokemonDetails} = usePokemonContext();

  const handleClose = () => {
    viewPokemonDetails(null);
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
          </>
        )}
      </View>
    </Modal>
  );
};

export default PokemonDetailModal;
