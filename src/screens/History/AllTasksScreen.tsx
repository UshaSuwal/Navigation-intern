import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AllTasksScreen = () => {
  return (
    <View style={styles.container}>
      <Text>All Tasks Screen</Text>
    </View>
  );
};

export default AllTasksScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
