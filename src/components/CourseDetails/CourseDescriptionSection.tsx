import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CourseDescriptionSectionProps {
  description: string;
  onReadMoreHandler: () => void;
  showDescription: boolean;
}

const CourseDescriptionSection = ({
  description = 'Course Description',
  onReadMoreHandler,
  showDescription,
}: CourseDescriptionSectionProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Description</Text>
      <Text
        numberOfLines={showDescription ? undefined : 4}
        style={styles.description}
      >
        {description}
      </Text>
      <Text style={styles.readMore} onPress={onReadMoreHandler}>
        {showDescription ? 'Read Less' : 'Read More'}
      </Text>
    </View>
  );
};

export default CourseDescriptionSection;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 18,
    marginTop: 24,
  },
  title: {
    color: '#000',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 24,
  },
  description: {
    color: '#000',
    fontSize: 15,
  },
  readMore: {
    color: '#2CD8D5',
    fontWeight: '700',
    marginTop: 8,
  },
});
