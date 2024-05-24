import { Middleware, configureStore } from '@reduxjs/toolkit'
import { counterReducer } from '../slices/CounterSlice';
import { UserState, nameReducer } from '../slices/UserSlice';
import { CounterState } from '../types/CounterState';
import type {GetDefaultMiddleware} from "@reduxjs/toolkit/src/getDefaultMiddleware";

const customLogger: Middleware = (store) => (next) => (action) => {
  console.log('Dispatching:', action);
  const result = next(action);
  console.log('Next state:', store.getState());
  return result;
};

export const appStore = configureStore<RootState>({
  reducer: {
    counter: counterReducer,
    name: nameReducer,
  },
  middleware: (getDefaultMiddleware: GetDefaultMiddleware) => {
    return getDefaultMiddleware().concat(customLogger);
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export interface RootState{
  counter: CounterState;
  name: UserState;
};

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof appStore.dispatch;
