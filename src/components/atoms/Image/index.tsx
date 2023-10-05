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
  onLoad?: () => void;
  onError?: () => void;
}

const sizes = {
  sm: {width: 75, height: 75},
  md: {width: 100, height: 100},
  lg: {width: 125, height: 125},
  xl: {width: 150, height: 150},
};

const Image: React.FC<ImageProps> = ({
  src,
  type,
  size = 'md',
  style,
  onLoad,
  onError,
}) => {
  const dimensions = sizes[size];

  const containerStyle = [
    dimensions,
    style,
    {minHeight: dimensions.height, minWidth: dimensions.width},
  ];

  if (type === 'svg') {
    return (
      <View style={containerStyle}>
        <SvgUri
          uri={src}
          width="100%"
          height="100%"
          onLoad={onLoad}
          onError={onError}
        />
      </View>
    );
  }

  return (
    <View style={containerStyle}>
      <NativeImage
        source={{uri: src}}
        style={[dimensions, style]}
        resizeMode="contain"
        onLoad={onLoad}
        onError={onError}
      />
    </View>
  );
};

export default Image;
