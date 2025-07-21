import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from 'react-native';
import React from 'react';
import NavigationHeader from '../../../components/NavigationHeader';
import HorizontalRule from '../../../components/HorizontalRule';
import CourseCard from '../../../components/CourseCard';
import LandingPageCover from '../../../components/CourseList/LandingPageCover';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/AppStackNavigator';
import { useCourseListViewModel } from './CourseListViewModel';

type Props = StackScreenProps<RootStackParamList, 'CourseListScreen'>;

export default function CourseList({ navigation }: Props) {
  const { courses, loading, error, refresh, loadMore } =
    useCourseListViewModel();

  if (loading)
    return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;
  if (error) return <Text>{error}</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <NavigationHeader showMenu={true} showLogo={true} showSearchIcon={true} />

      <FlatList
        data={courses}
        keyExtractor={item => item.id}
        onRefresh={refresh}
        refreshing={loading}
        onEndReachedThreshold={0.4}
        onEndReached={loadMore}
        ListHeaderComponent={
          <>
            <LandingPageCover />
            <HorizontalRule
              primaryColor={'#A25530'}
              secondaryColor={'#7A2884'}
            />
          </>
        }
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('CourseDetailsScreen', {
                  slug: item.slug,
                })
              }
            >
              <CourseCard
                title={item.title}
                authorName={item.tutors[0].name}
                authorProfilePicture={item.tutors[0].avatar_url}
                thumbnail={item.thumbnail_url}
              />
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', flex: 1 },
});
