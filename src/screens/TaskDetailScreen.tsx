import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/type';

type Props = NativeStackScreenProps<RootStackParamList, 'TaskDetail'>;

const TaskDetailScreen = ({ route }: Props) => {
  const { task } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <Text>Status: {task.completed ? 'Completed' : 'Incomplete'}</Text>
    </View>
  );
};

export default TaskDetailScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
});
