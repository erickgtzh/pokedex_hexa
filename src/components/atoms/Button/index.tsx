import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

interface ButtonProps {
  onPress: () => void;
  variant?: 'basic' | 'delete';
}

const Button: React.FC<ButtonProps> = ({onPress, variant = 'basic'}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={variant === 'delete' ? styles.deleteButton : styles.basicButton}>
      <Text style={styles.text}>{variant === 'delete' ? 'Delete' : 'Add'}</Text>
    </TouchableOpacity>
  );
};

export default Button;
