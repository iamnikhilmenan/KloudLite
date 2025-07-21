import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface CourseContentDetailsProps {
  id: string;
  lessons_count: string | number;
  lessons: object[];
  modules: [];
  position: string | number;
  title: string;
}

const CourseContentDetails = ({ modules }: CourseContentDetailsProps) => {
  console.log(`modules===>`, modules);
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Course Content</Text>
        <TouchableOpacity style={styles.expandButton}>
          <Text style={styles.expandButtonText}>Expand All</Text>
          <Image
            source={require('../../assets/right-chevron.png')}
            style={styles.expandIcon}
            tintColor={'#2CD8D5'}
          />
        </TouchableOpacity>
      </View>

      {/* Sections List */}
      {modules.map((item: any) => (
        <View key={item.id} style={styles.sectionCard}>
          <View style={styles.sectionLeft}>
            <Image
              source={require('../../assets/right-chevron.png')}
              style={styles.sectionIcon}
              tintColor={'#000'}
            />
            <Text>{item.title}</Text>
          </View>
          <Text style={styles.topicsText}>{item.lessons_count} Topics</Text>
        </View>
      ))}
    </View>
  );
};

export default CourseContentDetails;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    paddingHorizontal: 18,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  title: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
  },
  expandButton: {
    alignItems: 'center',
    borderColor: '#2CD8D5',
    borderRadius: 100,
    borderWidth: 2,
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  expandButtonText: {
    color: '#2CD8D5',
    fontWeight: '700',
  },
  expandIcon: {
    height: 24,
    marginLeft: 4,
    width: 24,
  },
  sectionCard: {
    alignItems: 'center',
    backgroundColor: '#e6e6e6ff',
    borderRadius: 12,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
    paddingHorizontal: 12,
    paddingVertical: 24,
    shadowColor: '#000',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  sectionLeft: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '70%',
  },
  sectionIcon: {
    height: 24,
    marginRight: 4,
    width: 24,
  },
  topicsText: {
    width: '20%',
  },
});
