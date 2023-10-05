// screens/EditProfile.tsx
import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Button from '../../components/atoms/Button';
import User from '../../models/User';
import {useUserContext} from '../../context/UserContex';
import {useNavigation} from '@react-navigation/native';

const EditProfile: React.FC = () => {
  const {user, updateUser} = useUserContext();
  const [fullName, setFullName] = useState(user?.fullName || '');
  const [birthDate, setBirthDate] = useState(user?.birthDate || '');

  const navigation = useNavigation();

  const handleUpdateProfile = () => {
    if (user) {
      const updatedUser = new User(user.avatarUrl, fullName, birthDate);
      updateUser(updatedUser);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={fullName}
        onChangeText={setFullName}
        placeholder="Full Name"
      />
      <TextInput
        value={birthDate}
        onChangeText={setBirthDate}
        placeholder="Birth Date"
      />
      <Button onPress={handleUpdateProfile} title="Update Profile" />
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

export default EditProfile;
