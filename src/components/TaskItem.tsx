import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { Task } from '../types/types';

type Props = {
  task: Task;
  onToggle: (id: string) => void;
  onPress: () => void;
  onDelete: (id: string) => void;
};

const TaskItem = ({ task, onToggle, onPress, onDelete }: Props) => {
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
      <Pressable onPress={() => onDelete(task.id)} style={styles.deleteButton}>
        <Text style={styles.deleteText}>Delete</Text>
      </Pressable>
    </TouchableOpacity>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    flex: 1,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
