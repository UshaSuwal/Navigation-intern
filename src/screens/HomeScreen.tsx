import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { addTask } from '../store/todoSlice';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/type';
import { useAppDispatch, useAppSelector } from '../store/hooks';

const HomeScreen = () => {
  const tasks = useAppSelector((state) => state.todos.tasks);
  const dispatch = useAppDispatch();
  const [taskInput, setTaskInput] = useState('');
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleAdd = () => {
    if (taskInput.trim()) {
      dispatch(addTask({ title: taskInput.trim() }));
      setTaskInput('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={taskInput}
        onChangeText={setTaskInput}
        placeholder="Add a task"
        style={styles.input}
      />
      <Button title="Add Task" onPress={handleAdd} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('TaskDetail', { taskId: item.id })}
          >
            <Text style={styles.task}>
              {item.title} {item.completed ? '✅' : ''}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 10,
    borderRadius: 6,
  },
  task: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
