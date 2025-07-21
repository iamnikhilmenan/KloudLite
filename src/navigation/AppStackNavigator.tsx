import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CourseList from '../presentation/screens/CourseList/CourseList';
import CourseDetails from '../presentation/screens/CourseDetails/CourseDetails';
import VideoPlayer from '../presentation/screens/VideoPlayer/VideoPlayer';

export type RootStackParamList = {
  CourseListScreen: undefined;
  CourseDetailsScreen: { slug: string };
  VideoPlayerScreen: { lessonId: string | number };
};

const Stack = createStackNavigator<RootStackParamList>();

const AppStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="CourseListScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="CourseListScreen" component={CourseList} />
        <Stack.Screen name="CourseDetailsScreen" component={CourseDetails} />
        <Stack.Screen name="VideoPlayerScreen" component={VideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStackNavigator;
