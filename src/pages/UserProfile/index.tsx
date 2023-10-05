// screens/MyProfile.tsx
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useUserContext} from '../../context/UserContex';
import Avatar from '../../components/atoms/Avatar';
import ProfileInfo from '../../components/organisms/ProfileInfo';
import Button from '../../components/atoms/Button';
import {useNavigation} from '@react-navigation/native';

const MyProfile: React.FC = () => {
  const {user} = useUserContext();
  const navigation = useNavigation();

  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  return (
    <View style={styles.container}>
      {user && (
        <>
          <Avatar src={user.avatarUrl} />
          <ProfileInfo fullName={user.fullName} birthDate={user.birthDate} />
        </>
      )}
      <Button onPress={handleEditProfile} title="Edit Profile" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyProfile;
