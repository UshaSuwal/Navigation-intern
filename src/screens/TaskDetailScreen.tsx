import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { editTask, toggleTask } from '../store/todoSlice';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/type';

type Props = NativeStackScreenProps<RootStackParamList, 'TaskDetail'>;

const TaskDetailScreen = ({ route, navigation }: Props) => {
  const { taskId } = route.params;
  const dispatch = useAppDispatch();

  const task = useAppSelector((state) =>
    state.todos.tasks.find((t) => t.id === taskId)
  );

  const [title, setTitle] = useState(task?.title ?? '');

  if (!task) {
    return (
      <View style={styles.container}>
        <Text>Task not found</Text>
      </View>
    );
  }

  const saveEdit = () => {
    if (title.trim()) {
      dispatch(editTask({ id: task.id, title: title.trim() }));
      navigation.goBack();
    }
  };

  const toggle = () => {
    dispatch(toggleTask({ id: task.id }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Edit Task Title</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        style={styles.input}
        placeholder="Task title"
      />
      <Button title="Save" onPress={saveEdit} />
      <View style={{ height: 20 }} />
      <Button
        title={task.completed ? 'Mark Incomplete' : 'Mark Complete'}
        onPress={toggle}
      />
    </View>
  );
};

export default TaskDetailScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 6,
    marginBottom: 16,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 8,
    fontSize: 16,
  },
});
