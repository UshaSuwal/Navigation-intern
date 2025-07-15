import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { toggleTask } from '../store/todoSlice';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/type';
import { useAppDispatch, useAppSelector } from '../store/hooks';

type Props = NativeStackScreenProps<RootStackParamList, 'TaskDetail'>;

const TaskDetailScreen = ({ route, navigation }: Props) => {
  const { taskId } = route.params;
  const dispatch = useAppDispatch();

  const task = useAppSelector((state) =>
    state.todos.tasks.find((t) => t.id === taskId)
  );

  if (!task) {
    return (
      <View style={styles.container}>
        <Text>Task not found</Text>
      </View>
    );
  }

  const toggle = () => {
    dispatch(toggleTask({ id: task.id }));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <Text>Status: {task.completed ? '✅ Completed' : '❌ Incomplete'}</Text>
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
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
});
