import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {UserProfile, PokemonList, Notifications} from '../pages';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../utils/colors';
import {usePokemonContext} from '../context/PokemonContext';
import {StyleSheet, View} from 'react-native';
import Badge from '../components/atoms/Badge';

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

const NotificationsTabIcon = ({color, badgeCount}) => (
  <View style={styles.container}>
    <View style={styles.subcontainer}>
      <Badge count={badgeCount} />
    </View>
    <NotificationsIcon color={color} />
  </View>
);

const BottomTabNavigator = () => {
  const {userPokemons} = usePokemonContext();
  const badgeCount = userPokemons.length;

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
        options={{
          tabBarIcon: ({color}) => (
            <NotificationsTabIcon color={color} badgeCount={badgeCount} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    margin: 5,
  },
  subcontainer: {
    position: 'absolute',
    right: -5,
    top: -5,
    zIndex: 1,
  },
});

export default BottomTabNavigator;
