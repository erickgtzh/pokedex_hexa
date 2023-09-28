import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {PokemonList, AddPokemon, UserProfile} from '../pages';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../colors';

const Tab = createBottomTabNavigator();

const PokemonListIcon = ({color}: {color: string}) => (
  <MaterialIcons name="list" size={25} color={color} />
);
const AddPokemonIcon = ({color}: {color: string}) => (
  <MaterialIcons name="add-circle" size={25} color={color} />
);
const UserProfileIcon = ({color}: {color: string}) => (
  <MaterialIcons name="person" size={25} color={color} />
);

const BottomTabNavigator = () => {
  const tabOptions = {
    PokemonList: {
      headerTitle: 'My Pokédex',
      tabBarLabel: 'Pokédex',
      tabBarIcon: PokemonListIcon,
    },
    AddPokemon: {
      headerTitle: 'Add Pokemon',
      tabBarLabel: 'Add Pokemon',
      tabBarIcon: AddPokemonIcon,
    },
    UserProfile: {
      headerTitle: 'My Profile',
      tabBarLabel: 'My Profile',
      tabBarIcon: UserProfileIcon,
    },
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.accent,
      }}>
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
  );
};

export default BottomTabNavigator;
