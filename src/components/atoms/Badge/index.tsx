// components/atoms/Badge.tsx

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Badge: React.FC<{count: number}> = ({count}) => {
  return (
    <View style={styles.badge}>
      <Text style={styles.text}>{count || 0}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    backgroundColor: 'red',
    borderRadius: 12,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 12,
  },
});

export default Badge;
