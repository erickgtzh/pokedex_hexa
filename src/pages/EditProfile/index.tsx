import React from 'react';
import {View, StyleSheet} from 'react-native';
import EditProfileForm from '../../components/organisms/EditProfileForm';
import {colors} from '../../utils/colors';

const EditProfileScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <EditProfileForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
});

export default EditProfileScreen;
