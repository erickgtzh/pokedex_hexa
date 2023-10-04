import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Image from '../../atoms/Image';
import Loader from '../../atoms/Loader';
import Text from '../../atoms/Text';
import {colors} from '../../../utils/colors';
import {DEFAULT_POKEMON_IMAGE} from '../../../config/constants';
import {usePokemonContext} from '../../../context/PokemonContext';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

interface CardProps {
  name: string;
  imageUrl: string;
  types: string[];
  firstMove: string;
  lastMove: string;
  lastFiveMoves: string[];
  onDelete: () => void;
  onViewDetails: () => void;
}

const Card: React.FC<CardProps> = React.memo(
  ({
    name,
    imageUrl,
    types,
    firstMove,
    lastMove,
    lastFiveMoves,
    onDelete,
    onViewDetails,
  }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const {viewPokemonDetails} = usePokemonContext();

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
        <Text style={styles.text}>
          Types: {types ? types.join(', ') : 'N/A'}
        </Text>
        <Text style={styles.text}>First Move: {firstMove}</Text>
        <Text style={styles.text}>Last Move: {lastMove}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
            <MaterialIcons name="delete" size={24} color={colors.white} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onViewDetails} style={styles.detailButton}>
            <MaterialIcons name="info" size={24} color={colors.white} />
          </TouchableOpacity>
        </View>
      </View>
    );
  },
);

export default Card;
