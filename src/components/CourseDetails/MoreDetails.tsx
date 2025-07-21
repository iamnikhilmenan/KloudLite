import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MoreDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.option}>
        <Text style={styles.optionText}>Learning Path</Text>
        <Image
          source={require('../../assets/right-chevron.png')}
          style={styles.icon}
          tintColor={'#000'}
        />
      </View>
      <View style={styles.option}>
        <Text style={styles.optionText}>Courses</Text>
        <Image
          source={require('../../assets/right-chevron.png')}
          style={styles.icon}
          tintColor={'#000'}
        />
      </View>
    </View>
  );
};

export default MoreDetails;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 18,
    marginTop: 24,
    overflow: 'hidden',
  },
  option: {
    alignItems: 'center',
    backgroundColor: '#e6e6e6ff',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
    paddingHorizontal: 24,
    paddingVertical: 18,
  },
  optionText: {
    color: '#585151ff',
    fontSize: 18,
    fontWeight: '500',
  },
  icon: {
    height: 24,
    width: 24,
  },
});
