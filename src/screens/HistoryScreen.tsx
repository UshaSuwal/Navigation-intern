import React from 'react';
import { View, StyleSheet } from 'react-native';
import HistoryTopTabs from '../navigation/HistoryTopTabs';

const HistoryScreen = () => {
  return (
    <View style={styles.container}>
      <HistoryTopTabs />
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
