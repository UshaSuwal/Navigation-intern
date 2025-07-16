import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { decrement, increment, incrementByAmount, reset } from '../../store/counterSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Increment by 5" onPress={() => dispatch(incrementByAmount(5))} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Button title="Reset" onPress={() => dispatch(reset())} />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
  },
});
