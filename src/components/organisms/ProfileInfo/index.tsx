import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../../atoms/Text';

const ProfileInfo: React.FC<{fullName: string; birthDate: string}> = ({
  fullName,
  birthDate,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.fullName}>Full Name: {fullName}</Text>
      <Text style={styles.birthDate}>Birth Date:{birthDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  fullName: {
    fontSize: 20,
  },
  birthDate: {
    fontSize: 16,
  },
});

export default ProfileInfo;
