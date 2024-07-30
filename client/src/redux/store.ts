import { configureStore, Store } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import gamesSlice from './gamesSlice';

const storeOptions = {
  reducer: {
    gamesSlice,
    userSlice
  },
};

export const store: Store = configureStore(storeOptions);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
