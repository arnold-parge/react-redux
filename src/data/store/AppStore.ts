import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from '../slices/CounterSlice';
import { nameReducer } from '../slices/UserSlice';

export const appStore = configureStore({
  reducer: {
    counter: counterReducer,
    name: nameReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof appStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof appStore.dispatch;
