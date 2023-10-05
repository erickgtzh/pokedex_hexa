import React, {useEffect, useRef} from 'react';
import {View, Animated, Easing, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../../utils/colors';

interface LoaderProps {
  color?: string;
  size?: number;
  icon?: 'loading' | 'pokeball';
  center?: boolean;
}

const Loader: React.FC<LoaderProps> = ({
  color = colors.lightgray,
  size = 50,
  icon = 'loading',
  center = false,
}) => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={[styles.loader, center && styles.centered]}>
      <Animated.View style={{transform: [{rotate: spin}]}}>
        <MaterialCommunityIcons name={icon} size={size} color={color} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 15,
  },
  centered: {
    justifyContent: 'center',
  },
});

export default Loader;
