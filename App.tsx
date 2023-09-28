import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {PokemonList, AddPokemon, UserProfile} from './src/pages';

const Tab = createBottomTabNavigator();

const App = () => {
  const tabOptions = {
    PokemonList: {
      headerTitle: 'My Pokédex',
      tabBarLabel: 'Pokédex',
    },
    AddPokemon: {
      headerTitle: 'Add Pokemon',
      tabBarLabel: 'Add Pokemon',
    },
    UserProfile: {
      headerTitle: 'My Profile',
      tabBarLabel: 'My Profile',
    },
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="PokemonList"
          component={PokemonList}
          options={tabOptions.PokemonList}
        />
        <Tab.Screen
          name="AddPokemon"
          component={AddPokemon}
          options={tabOptions.AddPokemon}
        />
        <Tab.Screen
          name="UserProfile"
          component={UserProfile}
          options={tabOptions.UserProfile}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
