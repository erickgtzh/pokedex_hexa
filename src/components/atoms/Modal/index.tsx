import React from 'react';
import {Modal, View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

interface PokemonModalProps {
  visible: boolean;
  onClose: () => void;
  pokemon: {
    name: string;
    firstType: string;
    firstMove: string;
    lastMove: string;
  };
}

const PokemonModal: React.FC<PokemonModalProps> = ({
  visible,
  onClose,
  pokemon,
}) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{pokemon.name}</Text>
          <Text style={styles.modalText}>First Type: {pokemon.firstType}</Text>
          <Text style={styles.modalText}>First Move: {pokemon.firstMove}</Text>
          <Text style={styles.modalText}>Last Move: {pokemon.lastMove}</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default PokemonModal;
