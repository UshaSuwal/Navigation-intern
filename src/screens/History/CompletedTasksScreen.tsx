import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CompletedTasksScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Completed Tasks Screen</Text>
    </View>
  );
};

export default CompletedTasksScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
