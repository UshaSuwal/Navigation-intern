import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { toggleTask, deleteTask } from '../../store/todoSlice';  // <-- import deleteTask
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/type';
import TaskItem from '../../components/TaskItem';

const CompletedTasksScreen = () => {
  const tasks = useAppSelector((state) =>
    state.todos.tasks.filter((t) => t.completed)
  );
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onToggle={(id) => dispatch(toggleTask({ id }))}
            onDelete={(id) => dispatch(deleteTask({ id }))}  
            onPress={() => navigation.navigate('TaskDetail', { taskId: item.id })}
          />
        )}
      />
    </View>
  );
};

export default CompletedTasksScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
