import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Text,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import NavigationHeader from '../../../components/NavigationHeader';
import CourseInfoCard from '../../../components/CourseDetails/CourseInfoCard';
import CourseDescriptionSection from '../../../components/CourseDetails/CourseDescriptionSection';
import InstructorInfoCard from '../../../components/CourseDetails/InstructorInfoCard';
import CourseContentDetails from '../../../components/CourseDetails/CourseContentDetails';
import MoreDetails from '../../../components/CourseDetails/MoreDetails';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/AppStackNavigator';
import getApiCall from '../../../data/api/CourseApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = StackScreenProps<RootStackParamList, 'CourseDetailsScreen'>;

export default function CourseDetails({ route }: Props) {
  const { slug } = route.params;
  const [showDescription, setShowDescription] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [course, setCourse] = useState<any>(null);
  const [enrolled, setEnrolled] = useState(false);

  const onReadMoreHandler = () => setShowDescription(!showDescription);

  const fetchCourseDetail = async () => {
    try {
      setLoading(true);
      const res = await getApiCall.get(`/courses/${slug}`);
      setCourse(res.data);

      const stored = await AsyncStorage.getItem(`enrolled:${slug}`);
      setEnrolled(stored === 'true');
    } catch (err) {
      console.error(err);
      setError('Failed to load course.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourseDetail();
  }, []);

  if (loading) {
    return (
      <SafeAreaView>
        <ActivityIndicator style={{ marginTop: 50 }} />
      </SafeAreaView>
    );
  }

  if (error || !course) {
    return (
      <SafeAreaView>
        <Text style={{ marginTop: 50, textAlign: 'center', color: 'red' }}>
          {error}
        </Text>
      </SafeAreaView>
    );
  }

  const instructor = course.tutors?.[0];
  const allLessons = course.modules?.flatMap((mod: any) => mod.lessons) ?? [];

  console.log(`course details screen====>`, course);

  return (
    <SafeAreaView>
      <NavigationHeader
        showBackButton={true}
        showLogo={true}
        showSearchIcon={true}
      />

      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <CourseInfoCard
          category={course.categories[0].name}
          authorName={course.tutors[0].name}
          authorPicture={course.tutors[0].avatar_url}
          authorPosition={course.tutors[0].bio}
          lessonsCount={course.modules_count}
          title={course.title}
          description={course.excerpt}
          topicsCount={course.lessons_count}
          key={course.id}
        />
        <CourseDescriptionSection
          showDescription={showDescription}
          onReadMoreHandler={onReadMoreHandler}
          description={course.description}
        />
        <InstructorInfoCard
          instructorAvatar={course.tutors[0].avatar_url}
          instructorDescription={course.tutors[0].description}
        />
        <CourseContentDetails modules={course.modules} />
        <MoreDetails />
      </ScrollView>
    </SafeAreaView>
  );
}
