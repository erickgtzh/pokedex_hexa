import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Text from '../../atoms/Text';
import {colors} from '../../../utils/colors';

interface SelectorCardProps {
  title: string;
  onPress: () => void;
}

const SelectorCard: React.FC<SelectorCardProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text variant="subtitle" style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    margin: 8,
    borderRadius: 8,
    backgroundColor: colors.white,
    elevation: 5,
    flex: 1,
    height: 100,
  },
  title: {
    fontSize: 18,
  },
});

export default SelectorCard;
