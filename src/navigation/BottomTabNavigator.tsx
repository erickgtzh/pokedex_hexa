import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {UserProfile, PokemonList, Notifications} from '../pages';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../utils/colors';

const Tab = createBottomTabNavigator();

const PokemonListIcon = ({color}: {color: string}) => (
  <MaterialIcons name="catching-pokemon" size={25} color={color} />
);
const NotificationsIcon = ({color}: {color: string}) => (
  <MaterialIcons name="notifications" size={25} color={color} />
);
const UserProfileIcon = ({color}: {color: string}) => (
  <MaterialIcons name="person" size={25} color={color} />
);

const BottomTabNavigator = () => {
  const tabOptions = {
    UserProfile: {
      headerTitle: 'My Profile',
      tabBarLabel: 'My Profile',
      tabBarIcon: UserProfileIcon,
    },
    PokemonList: {
      headerTitle: 'My Pokédex',
      tabBarLabel: 'Pokédex',
      tabBarIcon: PokemonListIcon,
    },
    Notifications: {
      headerTitle: 'Notifications',
      tabBarLabel: 'Notifications',
      tabBarIcon: NotificationsIcon,
    },
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.accent,
      }}>
      <Tab.Screen
        name="UserProfile"
        component={UserProfile}
        options={tabOptions.UserProfile}
      />
      <Tab.Screen
        name="PokemonList"
        component={PokemonList}
        options={tabOptions.PokemonList}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={tabOptions.Notifications}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
