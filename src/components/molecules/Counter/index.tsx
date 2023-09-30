import React from 'react';
import {View} from 'react-native';
import Button from '../../atoms/Button';
import Text from '../../atoms/Text';
import styles from './styles';
import {useCounterContext} from '../../../context/CounterContext';

const Counter = () => {
  const {state, dispatch} = useCounterContext();

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{state.count}</Text>
      <Button title="Increment" onPress={() => dispatch({type: 'INCREMENT'})} />
      <Button title="Decrement" onPress={() => dispatch({type: 'DECREMENT'})} />
    </View>
  );
};

export default Counter;
