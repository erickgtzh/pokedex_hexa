// screens/MyProfile.tsx
import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {useUserContext} from '../../context/UserContex';
import Avatar from '../../components/atoms/Avatar';
import ProfileInfo from '../../components/organisms/ProfileInfo';
import Button from '../../components/atoms/Button';
import {useNavigation} from '@react-navigation/native';
import {DEFAULT_POKEMON_IMAGE} from '../../config/constants';
import Text from '../../components/atoms/Text';
import {colors} from '../../utils/colors';

const MyProfile: React.FC = () => {
  const {user} = useUserContext();
  const navigation = useNavigation();

  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  return (
    <View style={styles.container}>
      {user ? (
        <Pressable onPress={handleEditProfile} style={styles.content}>
          <Avatar src={user.avatarUrl || DEFAULT_POKEMON_IMAGE} />
          <ProfileInfo fullName={user.fullName} birthDate={user.birthDate} />
        </Pressable>
      ) : (
        <>
          <Text variant="subtitle" style={{paddingBottom: 40}}>
            You should fill out your profile to see your information...
          </Text>
          <Button onPress={handleEditProfile} title="Edit Profile" />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: colors.primary,
    width: '100%',
    height: '100%',
  },
});

export default MyProfile;
