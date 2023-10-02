import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import Image from '../../atoms/Image';
import Loader from '../../atoms/Loader';
import Text from '../../atoms/Text';
import {colors} from '../../../utils/colors';
import {DEFAULT_POKEMON_IMAGE} from '../../../config/constants';

interface CardProps {
  name: string;
  imageUrl: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = React.memo(({name, imageUrl, children}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = () => {
    setError(true);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {loading && !error && (
          <View style={styles.absoluteContainer}>
            <Loader icon="pokeball" size={100} />
          </View>
        )}
        <Image
          src={error ? DEFAULT_POKEMON_IMAGE : imageUrl}
          type={error ? 'image' : 'svg'}
          onLoad={handleLoad}
          onError={handleError}
          size="lg"
        />
      </View>
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
});

export default Card;
