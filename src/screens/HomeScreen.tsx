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
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { Task } from '../types/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabParamList, RootStackParamList } from '../navigation/type';

type Props = BottomTabScreenProps<BottomTabParamList, 'Home'>;

const HomeScreen = ({}: Props) => {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const addTask = () => {
    if (!taskInput.trim()) return;
    const newTask: Task = {
      id: Date.now().toString(),
      title: taskInput,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
    setTaskInput('');
  };

  const handlePress = (task: Task) => {
    navigation.navigate('TaskDetail', { task });
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={taskInput}
        onChangeText={setTaskInput}
        placeholder="Add a task"
        style={styles.input}
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <Text style={styles.task}>{item.title}</Text>
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
