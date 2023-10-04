import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import styles from './styles';
import Text from '../Text';
import {colors} from '../../../utils/colors';

interface ExtendedButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  variant?: 'basic' | 'delete';
  additionalProp?: string;
  title?: string;
  style?: StyleProp<ViewStyle>;
}

const Button: React.FC<ExtendedButtonProps> = ({
  onPress,
  variant = 'basic',
  additionalProp,
  title = 'Add',
  style,
  ...otherProps
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        variant === 'delete' ? styles.deleteButton : styles.basicButton,
        styles.button,
        style,
      ]}
      {...otherProps}>
      <Text
        variant="title"
        color={variant === 'delete' ? colors.error : colors.white}>
        {title}
      </Text>
      {additionalProp && <Text variant="subtitle">{additionalProp}</Text>}
    </TouchableOpacity>
  );
};

export default Button;
