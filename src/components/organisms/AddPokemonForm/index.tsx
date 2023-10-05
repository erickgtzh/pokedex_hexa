import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {usePokemonContext} from '../../../context/PokemonContext';
import Button from '../../atoms/Button';
import Text from '../../atoms/Text';
import {colors} from '../../../utils/colors';
import styles from './styles';

const AddPokemonForm = () => {
  const {addPokemon} = usePokemonContext();
  const [name, setName] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = () => {
    addPokemon({name, type});
  };

  return (
    <View style={styles.container}>
      <Text variant="title">Name:</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter Pokemon Name"
        placeholderTextColor={colors.grey}
        style={styles.input}
        cursorColor={colors.accent}
      />
      <Text variant="title">Type:</Text>
      <TextInput
        value={type}
        onChangeText={setType}
        placeholder="Enter Pokemon Type"
        placeholderTextColor={colors.grey}
        style={styles.input}
        cursorColor={colors.accent}
      />
      <Button
        title="Submit"
        onPress={handleSubmit}
        style={{marginVertical: 20}}
      />
    </View>
  );
};

export default AddPokemonForm;
