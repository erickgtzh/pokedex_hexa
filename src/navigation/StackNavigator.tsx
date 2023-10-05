import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import AddPokemonScreen from '../pages/AddPokemon';
import AddPokemonSelector from '../components/organisms/AddPokemonSelector';
import ApiPokemonListScreen from '../components/organisms/ApiPokemonList';

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
        name="AddPokemonSelector"
        component={AddPokemonSelector}
        options={{title: 'Select one option'}}
      />
      <Stack.Screen
        name="AddPokemon"
        component={AddPokemonScreen}
        options={{title: 'Add New Pokemon'}}
      />
      <Stack.Screen
        name="ApiPokemonList"
        component={ApiPokemonListScreen}
        options={{title: 'Pokémon List'}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
