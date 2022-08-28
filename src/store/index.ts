import {configureStore} from '@reduxjs/toolkit';
import toastsReducer from './slices/toasts';
import languageReducer from './slices/localize';

export const store = configureStore({
  reducer: {
    notification: toastsReducer,
    localize: languageReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
