import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';

interface CourseCard {
  authorName: string;
  authorProfilePicture: string;
  thumbnail: string;
  title: string;
}

export default function CourseCard({
  thumbnail = 'https://cdn.prod.website-files.com/62a8969da1ab56329dc8c41e/67e4faa5dd1c74fbbd8ed618_AWS%20SysOps%20Administrator%20Associate-p-500.png',
  title = 'AWS Certified SysOps Administrator - Associate',
  authorProfilePicture = 'https://cdn.prod.website-files.com/62a8969da1ab56329dc8c41e/67e4faa5dd1c74fbbd8ed618_AWS%20SysOps%20Administrator%20Associate-p-500.png',
  authorName = 'Michael Forrester',
}: CourseCard) {
  console.log(`thumbnail===>`, thumbnail);
  return (
    <View style={styles.courseCardContainer}>
      {/* card Header content */}
      <Image
        resizeMode="cover"
        source={{ uri: thumbnail }}
        style={styles.thumbnailImage}
      />

      {/* card header body */}
      <LinearGradient
        colors={['#0a1e2f', '#071623']}
        end={{ x: 1, y: 1 }}
        start={{ x: 0, y: 0 }}
      >
        <View style={styles.courseInfoContainer}>
          <Text style={styles.courseTitle}>{title}</Text>

          {/* Author */}
          <View style={styles.authorContainer}>
            <Image
              source={{ uri: authorProfilePicture }}
              style={styles.authorImage}
            />
            <Text style={styles.courseAuthorText}>{authorName}</Text>
          </View>

          {/* Start Now button */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.startNowButtonContainer}
          >
            <LinearGradient
              colors={['#2CD8D5', '#6B8DD6']}
              end={{ x: 1, y: 1 }}
              start={{ x: 0, y: 0 }}
            >
              <Text style={styles.buttonText}>Start Now</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  authorContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 12,
  },
  authorImage: {
    borderRadius: 100,
    height: 32,
    marginRight: 10,
    width: 32,
  },
  courseCardContainer: {
    backgroundColor: '#fff',
    borderColor: '#000',
    borderRadius: 10,
    borderWidth: 0.2,
    elevation: 6,
    marginHorizontal: 28,
    marginTop: 28,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  courseInfoContainer: {
    padding: 12,
  },
  courseTitle: {
    color: '#fff',
    fontSize: 18,
  },
  courseAuthorText: {
    color: '#fff',
  },
  startNowButtonContainer: {
    borderRadius: 100,
    marginTop: 12,
    overflow: 'hidden',
  },
  thumbnailImage: {
    height: 150,
    width: '100%',
  },
  buttonText: {
    fontSize: 18,
    marginVertical: 14,
    textAlign: 'center',
  },
});
