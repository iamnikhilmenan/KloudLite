import { View, Text, Button } from 'react-native';
import React from 'react';

export default function VideoPlayer() {
  return (
    <View
      style={{
        backgroundColor: 'blue',
        flex: 1,
      }}
    >
      <Text>VideoPlayer</Text>
      <Button title="VideoPlayer" />
    </View>
  );
}
