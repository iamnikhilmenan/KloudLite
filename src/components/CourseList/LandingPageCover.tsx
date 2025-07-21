import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import Video from 'react-native-video';

export default function LandingPageCover() {
  return (
    <View style={styles.coverContainer}>
      {/* Header Title */}
      <Text style={styles.headerText}>Build, Break, Fix, Learn</Text>
      <Text style={styles.subHeaderText}>
        That’s how real engineers learn DevOps and that’s exactly how we teach.
      </Text>

      {/* Button */}
      <TouchableOpacity activeOpacity={0.8} style={styles.buttonContainer}>
        <LinearGradient
          colors={['#2CD8D5', '#6B8DD6']} // blue to green gradient (adjust if needed)
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text style={styles.buttonText}>Try Now</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Enrollment Text */}
      <Text style={styles.enrollText}>1M+ Enrolled</Text>

      {/* react native video */}
      <View style={styles.videoContainer}>
        <Video
          source={require('../../assets/Docker_PG_Rec_Dark.mp4')}
          style={{ width: '100%', aspectRatio: 16 / 9 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 100,
    overflow: 'hidden',
  },
  buttonText: {
    fontSize: 18,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  coverContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 32,
    paddingVertical: 24,
  },
  enrollText: {
    fontSize: 18,
    marginVertical: 18,
  },
  headerText: {
    fontSize: 32,
    paddingHorizontal: 52,
    textAlign: 'center',
  },
  subHeaderText: {
    fontSize: 18,
    marginVertical: 18,
    textAlign: 'center',
  },
  videoContainer: {
    backgroundColor: 'green',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    height: 150,
    overflow: 'hidden',
  },
});
