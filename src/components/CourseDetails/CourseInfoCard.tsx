import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import Video from 'react-native-video';

interface CourseInfoCardProps {
  authorName: string;
  authorPicture: string;
  authorPosition: string;
  category: string;
  description?: string;
  lessonsCount: string | number;
  title: string;
  topicsCount: string | number;
}

const CourseInfoCard = ({
  authorName = 'Author Name',
  authorPicture = 'https://cdn.prod.website-files.com/62a8969da1ab56329dc8c41e/67e4faa5dd1c74fbbd8ed618_AWS%20SysOps%20Administrator%20Associate-p-500.png',
  authorPosition = 'Author Designation',
  category = 'Category',
  description = 'Description',
  lessonsCount = 1,
  title = 'Title',
  topicsCount = 1,
}: CourseInfoCardProps) => {
  return (
    <LinearGradient
      colors={['#5F52FF', '#6E6BFF', '#AE62E3']}
      end={{ x: 1, y: 1 }}
      start={{ x: 0.2, y: 0 }}
      style={styles.aboutCourseCardContainer}
    >
      <View style={{ paddingHorizontal: 24 }}>
        <Text style={styles.tagStyle}>{category}</Text>
        <Text style={styles.courseName}>{title}</Text>
        <Text style={styles.courseDescription}>{description}</Text>

        <View style={styles.authorContainer}>
          <Image source={{ uri: authorPicture }} style={styles.authorPicture} />
          <View>
            <Text style={styles.authorName}>{authorName}</Text>
            <Text style={styles.authorExpertise}>{authorPosition}</Text>
          </View>
        </View>

        <View style={styles.courseVideoContainer}>
          <Video
            controls
            resizeMode="contain"
            source={require('../../assets/Docker_PG_Rec_Dark.mp4')}
            style={styles.videoStyle}
          />
        </View>

        <TouchableOpacity activeOpacity={0.8} style={styles.buttonContainer}>
          <LinearGradient
            colors={['#2CD8D5', '#6B8DD6']}
            end={{ x: 1, y: 1 }}
            start={{ x: 0, y: 0 }}
          >
            <Text style={styles.buttonText}>Subscribe Now</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.alreadySubscribeContainer}>
          <Text style={[styles.alreadySubscribeText, { marginRight: 6 }]}>
            Already Subscribed?
          </Text>
          <Text
            style={[
              styles.alreadySubscribeText,
              { textDecorationLine: 'underline' },
            ]}
          >
            Log in
          </Text>
        </View>

        <View style={styles.iconsContainer}>
          <View style={styles.iconContainer}>
            <Image
              source={require('../../assets/open-book.png')}
              style={styles.iconStyle}
              tintColor={'#fff'}
            />
            <Text style={styles.courseTopicsText}>{lessonsCount} Lessons</Text>
          </View>

          <View style={styles.iconContainer}>
            <Image
              source={require('../../assets/page.png')}
              style={styles.iconStyle}
              tintColor={'#fff'}
            />
            <Text style={styles.courseTopicsText}>{topicsCount} Topics</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default CourseInfoCard;

const styles = StyleSheet.create({
  aboutCourseCardContainer: {
    borderRadius: 18,
    marginHorizontal: 18,
    marginTop: 24,
  },
  alreadySubscribeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  },
  alreadySubscribeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  authorContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 24,
    width: '90%',
  },
  authorPicture: {
    borderRadius: 100,
    height: 42,
    marginRight: 12,
    resizeMode: 'cover',
    width: 42,
  },
  authorName: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
  authorExpertise: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'left',
  },
  buttonContainer: {
    borderRadius: 100,
    marginTop: 24,
    overflow: 'hidden',
  },
  buttonText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 18,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  courseTopicsText: {
    color: '#fff',
    fontWeight: '600',
  },
  courseName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 12,
    textAlign: 'left',
  },
  courseDescription: {
    color: '#fff',
    fontSize: 14,
    marginTop: 12,
    textAlign: 'left',
  },
  courseVideoContainer: {
    borderRadius: 18,
    marginTop: 32,
    overflow: 'hidden',
  },
  videoStyle: {
    aspectRatio: 16 / 9,
    width: '100%',
  },
  iconsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 38,
    marginTop: 52,
  },
  iconContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconStyle: {
    height: 24,
    marginRight: 10,
    width: 24,
  },
  tagStyle: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 10,
    color: '#fff',
    fontWeight: '600',
    marginTop: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
    textAlign: 'left',
  },
});
