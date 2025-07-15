import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Task } from '../types/types';

type Props = {
  task: Task;
  onToggle: (id: string) => void;
  onPress: () => void;
};

const TaskItem = ({ task, onToggle, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={() => onToggle(task.id)}
      delayLongPress={300}
    >
      <Text style={[styles.text, task.completed && styles.completed]}>
        {task.title}
      </Text>
    </TouchableOpacity>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  text: {
    fontSize: 16,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
});
