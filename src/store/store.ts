// import { configureStore } from '@reduxjs/toolkit';
// import todoReducer from './todoSlice';
// import counterReducer from './counterSlice';

// export const store = configureStore({
//   reducer: {
//     todos: todoReducer,
//     counter: counterReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;


import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import { mmkvStorage } from '../storage/mmkvStorage';
import { persistReducer, persistStore } from 'redux-persist';

const rootReducer = combineReducers({
  counter: counterReducer,
});

const persistConfig = {
  key: 'root',
  storage: mmkvStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // required for redux-persist + MMKV
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
