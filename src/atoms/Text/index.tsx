import React from 'react';
import {Text as RNText} from 'react-native';
import styles from './style';

interface TextProps {
  children: React.ReactNode;
  style?: object;
}

const Text: React.FC<TextProps> = ({children, style}) => {
  return <RNText style={[styles.text, style]}>{children}</RNText>;
};

export default Text;
