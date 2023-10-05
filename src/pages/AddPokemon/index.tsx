import React, {useState} from 'react';
import {TextInput, ScrollView, Alert} from 'react-native';
import {usePokemonContext} from '../../context/PokemonContext';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {colors} from '../../utils/colors';
import Button from '../../components/atoms/Button';
import Text from '../../components/atoms/Text';

const AddPokemonScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [firstType, setFirstType] = useState('');
  const [firstMove, setFirstMove] = useState('');
  const [lastMove, setLastMove] = useState('');
  const [lastFiveMoves, setLastFiveMoves] = useState<string[]>([]);
  const {addPokemon} = usePokemonContext();
  const navigation = useNavigation();

  const handleMoveChange = (index: number, move: string) => {
    const newMoves = [...lastFiveMoves];
    newMoves[index] = move;
    setLastFiveMoves(newMoves);
  };

  const validateForm = () => {
    if (!name || !firstType || !firstMove) {
      Alert.alert(
        'Error',
        'Name, First Type, and First Move are required fields.',
      );
      return false;
    }
    return true;
  };

  const handleAddPokemon = () => {
    if (validateForm()) {
      addPokemon({name, firstType, firstMove, lastMove, lastFiveMoves});
      navigation.goBack();
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name (required)"
        value={name}
        onChangeText={setName}
        placeholderTextColor={colors.grey}
      />
      <TextInput
        style={styles.input}
        placeholder="First Type (required)"
        value={firstType}
        onChangeText={setFirstType}
        placeholderTextColor={colors.grey}
      />
      <TextInput
        style={styles.input}
        placeholder="First Move (required)"
        value={firstMove}
        onChangeText={setFirstMove}
        placeholderTextColor={colors.grey}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Move"
        value={lastMove}
        onChangeText={setLastMove}
        placeholderTextColor={colors.grey}
      />
      <Text variant="subtitle" color={colors.grey} style={{marginVertical: 10}}>
        Last 5 Moves:
      </Text>
      {Array.from({length: 5}, (_, index) => (
        <TextInput
          key={index}
          style={styles.input}
          placeholder={`Move ${index + 1}`}
          value={lastFiveMoves[index] || ''}
          onChangeText={text => handleMoveChange(index, text)}
          placeholderTextColor={colors.grey}
        />
      ))}
      <Button
        title="Add Pokemon"
        onPress={handleAddPokemon}
        style={{width: '80%', marginTop: 20}}
      />
    </ScrollView>
  );
};

export default AddPokemonScreen;
