import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Task = {
  id: string;
  title: string;
  completed: boolean;
};

interface TodoState {
  tasks: Task[];
}

const initialState: TodoState = {
  tasks: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<{ title: string }>) {
      state.tasks.push({
        id: Date.now().toString(),
        title: action.payload.title,
        completed: false,
      });
    },
    toggleTask(state, action: PayloadAction<{ id: string }>) {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask(state, action: PayloadAction<{ id: string }>) {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload.id);
    },
  },
});

export const { addTask, toggleTask, deleteTask } = todoSlice.actions;

export default todoSlice.reducer;
