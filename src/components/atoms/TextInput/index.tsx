import React from 'react';
import {TextInput} from 'react-native';

const TextInputAtom: React.FC<{
  value: string;
  onChangeText: (text: string) => void;
}> = ({value, onChangeText}) => {
  return <TextInput value={value} onChangeText={onChangeText} />;
};

export default TextInputAtom;
