import { View, Text, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';

interface InstructorInfoCardProps {
  instructorAvatar: string;
  instructorDescription: string;
}

const InstructorInfoCard = ({
  instructorAvatar = 'https://cdn.prod.website-files.com/62a8969da1ab56329dc8c41e/67e4faa5dd1c74fbbd8ed618_AWS%20SysOps%20Administrator%20Associate-p-500.png',
  instructorDescription = 'Instructor Description',
}: InstructorInfoCardProps) => {
  return (
    <LinearGradient
      colors={['#00D4FF', '#0080FF']}
      end={{ x: 0, y: 1 }}
      start={{ x: 0, y: 0 }}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Image source={{ uri: instructorAvatar }} style={styles.image} />
        <Text style={styles.title}>About the Instructor</Text>
        <Text style={styles.description}>{instructorDescription}</Text>
      </View>
    </LinearGradient>
  );
};

export default InstructorInfoCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    marginHorizontal: 18,
    marginTop: 24,
  },
  innerContainer: {
    padding: 18,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 12,
  },
  description: {
    color: '#fff',
    fontSize: 15,
    lineHeight: 24,
    marginTop: 8,
  },
  image: {
    borderRadius: 12,
    height: 200,
    width: 200,
  },
});
