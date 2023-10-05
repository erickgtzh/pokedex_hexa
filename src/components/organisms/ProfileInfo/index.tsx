// components/molecules/ProfileInfo.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ProfileInfo: React.FC<{fullName: string; birthDate: string}> = ({
  fullName,
  birthDate,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.fullName}>{fullName}</Text>
      <Text style={styles.birthDate}>{birthDate}</Text>
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
