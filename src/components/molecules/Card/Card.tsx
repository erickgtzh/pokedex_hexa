import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Text from '../../atoms/Text';
import {colors} from '../../../utils/colors';
import Image from '../../atoms/Image';

interface CardProps {
  name: string;
  imageUrl: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({name, imageUrl, children}) => {
  return (
    <View style={styles.container}>
      <Image src={imageUrl} type="svg" size="lg" />
      <Text
        style={styles.text}
        variant="title"
        weight="bold"
        color={colors.black}>
        {name}
      </Text>
      {children}
    </View>
  );
};

export default Card;
