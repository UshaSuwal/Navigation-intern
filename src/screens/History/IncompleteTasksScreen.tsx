import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IncompleteTasksScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Incomplete Tasks Screen</Text>
    </View>
  );
};

export default IncompleteTasksScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
