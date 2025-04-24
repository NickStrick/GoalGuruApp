// components/AnimatedIcon.tsx
import React, { useRef, useEffect } from 'react';
import { Animated, StyleProp, ViewStyle } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface AnimatedIconProps {
  icon: IconDefinition;
  size?: number;
  color?: string; // Optional static color
  colors?: string[];
  animationDuration?: number;
  style?: StyleProp<ViewStyle>;
  spin?: boolean;
  pulse?: boolean;
  mask?: IconDefinition;
  transform?: string | object;
  symbol?: string;
  flip?: 'horizontal' | 'vertical' | 'both';
  rotation?: 90 | 180 | 270 | '90' | '180' | '270';
  border?: boolean;
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  icon,
  size,
  colors = ['orange', 'red', 'green'],
  animationDuration = 1500,
  style,
  ...restProps
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const numberOfColors = colors.length;

  useEffect(() => {
    if (numberOfColors < 2) {
      return;
    }

    const animationSequence = colors.map((_, index) =>
      Animated.timing(animatedValue, {
        toValue: index / (numberOfColors - 1),
        duration: animationDuration,
        useNativeDriver: false,
      })
    );

    Animated.loop(Animated.sequence(animationSequence), { iterations: -1 }).start();
  }, [animatedValue, colors, animationDuration, numberOfColors]);

  const interpolatedColor = animatedValue.interpolate({
    inputRange: Array.from({ length: numberOfColors }, (_, i) => i / (numberOfColors - 1)),
    outputRange: colors,
  });

  const animatedIconStyle = Animated.useAnimatedStyle(() => ({
    color: interpolatedColor.value, // Access the .value inside useAnimatedStyle
  }));

  return (
    <Animated.View style={style}> {/* Apply other styles to the Animated.View if needed */}
      <FontAwesomeIcon
        icon={icon}
        size={size}
        {...restProps}
        style={[animatedIconStyle, { color: color }]} // Apply animated and static color
      />
    </Animated.View>
  );
};

export default AnimatedIcon;