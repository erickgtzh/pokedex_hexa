import React from 'react';
import {Text as RNText, TextProps, TextStyle} from 'react-native';
import styles from './style';
import fonts from '../../../utils/fonts';

interface CustomTextProps extends TextProps {
  children: React.ReactNode;
  style?: TextStyle;
  variant?: 'title' | 'subtitle' | 'normal';
  weight?: 'normal' | 'bold';
  color?: string;
}

const Text: React.FC<CustomTextProps> = ({
  children,
  style,
  variant = 'normal',
  weight = 'normal',
  color,
}) => {
  const additionalStyles: TextStyle = {
    fontWeight: weight,
    fontSize:
      variant === 'title'
        ? fonts.size.lg
        : variant === 'subtitle'
        ? fonts.size.md
        : fonts.size.sm,
    color: color || 'black',
  };

  return (
    <RNText style={[styles.text, additionalStyles, style]}>{children}</RNText>
  );
};

export default Text;
