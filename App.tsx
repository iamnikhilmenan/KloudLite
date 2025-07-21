/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// course list api: https://learn-api.kodekloud.com/api/courses?page=1
// course API: https://learn.kodekloud.com/_next/data/i8qafWF9y6ItcdlLVRaPC/en/courses/crash-course-linux-for-absolute-beginners.json?courseSlug=crash-course-linux-for-absolute-beginners
// https://learn-api.kodekloud.com/api/learning_paths

import { SafeAreaProvider } from 'react-native-safe-area-context';
import axios from 'axios';
import { useEffect } from 'react';
import AppStackNavigator from './src/navigation/AppStackNavigator';

function App() {
  return (
    <SafeAreaProvider>
      <AppStackNavigator />
    </SafeAreaProvider>
  );
}

export default App;
