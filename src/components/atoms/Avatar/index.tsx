import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

interface AvatarProps {
  imageUrl: string;
  onEdit: () => void;
}

const Avatar: React.FC<AvatarProps> = ({imageUrl, onEdit}) => {
  return (
    <TouchableOpacity onPress={onEdit}>
      <Image
        source={{uri: imageUrl}}
        style={{width: 150, height: 150, borderRadius: 75}}
      />
    </TouchableOpacity>
  );
};

export default Avatar;
