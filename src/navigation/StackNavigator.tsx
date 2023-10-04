import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import AddPokemonScreen from '../pages/AddPokemon';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabs"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddPokemon"
        component={AddPokemonScreen}
        options={{title: 'Add New Pokemon'}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
