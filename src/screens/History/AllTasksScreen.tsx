import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import TaskItem from '../../components/TaskItem';
import { toggleTask } from '../../store/todoSlice';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/type';

const AllTasksScreen = () => {
  const tasks = useAppSelector((state) => state.todos.tasks);
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
            onPress={() => navigation.navigate('TaskDetail', { taskId: item.id })}
          />
        )}
      />
    </View>
  );
};

export default AllTasksScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
