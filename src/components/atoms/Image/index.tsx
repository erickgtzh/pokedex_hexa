import React from 'react';
import {
  Image as NativeImage,
  View,
  StyleProp,
  ViewStyle,
  ImageStyle,
} from 'react-native';
import {SvgUri} from 'react-native-svg';

interface ImageProps {
  src: string;
  type: 'svg' | 'image';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  style?: StyleProp<ViewStyle & ImageStyle>;
}

const sizes = {
  sm: {width: 75, height: 75},
  md: {width: 100, height: 100},
  lg: {width: 125, height: 125},
  xl: {width: 150, height: 150},
};

const Image: React.FC<ImageProps> = ({src, type, size = 'md', style}) => {
  const dimensions = sizes[size];

  if (type === 'svg') {
    return (
      <View style={[dimensions, style]}>
        <SvgUri uri={src} width="100%" height="100%" />
      </View>
    );
  }

  return (
    <NativeImage
      source={{uri: src}}
      style={[dimensions, style]}
      resizeMode="contain"
    />
  );
};

export default Image;
