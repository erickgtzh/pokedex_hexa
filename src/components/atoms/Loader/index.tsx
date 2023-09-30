import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './styles';
import {colors} from '../../../utils/colors';

interface LoaderProps {
  color?: string;
  size?: number | 'small' | 'large';
}

const Loader: React.FC<LoaderProps> = ({
  color = colors.accent,
  size = 'large',
}) => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator color={color} size={size} />
    </View>
  );
};

export default Loader;
