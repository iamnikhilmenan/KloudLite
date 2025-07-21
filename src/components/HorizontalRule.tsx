import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';

interface HorizontalRuleProps {
  primaryColor: string;
  secondaryColor: string;
}

export default function HorizontalRule({
  primaryColor,
  secondaryColor,
}: HorizontalRuleProps) {
  return (
    <LinearGradient
      colors={[primaryColor, secondaryColor]}
      end={{ x: 1, y: 1 }}
      start={{ x: 0, y: 0 }}
      style={styles.horizontalRule}
    ></LinearGradient>
  );
}

const styles = StyleSheet.create({
  horizontalRule: {
    backgroundColor: 'blue',
    height: 8,
    width: '100%',
  },
});
