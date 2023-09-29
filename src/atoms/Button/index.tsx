import React from 'react';
import {Button as RNButton} from 'react-native';
import styles from './styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({title, onPress}) => {
  return <RNButton title={title} onPress={onPress} style={styles.button} />;
};

export default Button;
