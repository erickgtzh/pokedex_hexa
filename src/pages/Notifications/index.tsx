import React from 'react';
import {View} from 'react-native';
import {useUserContext} from '../../context/UserContex';
import Text from '../../components/atoms/Text';
import {usePokemonContext} from '../../context/PokemonContext';
import styles from './style';

const Notifications: React.FC = () => {
  const {user} = useUserContext();
  const {userPokemons} = usePokemonContext();

  return (
    <View style={styles.container}>
      {user && user.fullName && (
        <Text variant="title">Welcome {user?.fullName}!</Text>
      )}
      <Text variant="title">
        You already have {userPokemons?.length || 0} pokemons!
      </Text>
    </View>
  );
};

export default Notifications;
