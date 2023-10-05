// components/atoms/Avatar.tsx
import React from 'react';
import {Image, StyleSheet} from 'react-native';

const Avatar: React.FC<{src: string}> = ({src}) => {
  return <Image source={{uri: src}} style={styles.avatar} />;
};

const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default Avatar;
