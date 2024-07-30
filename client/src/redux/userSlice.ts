import { createSlice } from '@reduxjs/toolkit';
import { User } from '../types/statesTypes';
import { fetchAuthUser, fetchLogoutUser, fetchRefresh } from './thunkActions';

type InitialState = {
  user: User;
};

const initialState: InitialState = {
  user: {
    id: 0,
    username: '',
    email: '',
    score: 0,
  },
};

const rtkSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAuthUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
    });

    builder.addCase(fetchLogoutUser.fulfilled, (state) => {
      state.user = {
        id: 0,
        username: '',
        email: '',
        score: 0,
      };
    });

    builder.addCase(fetchRefresh.fulfilled, (state, action) => {
      state.user = action.payload.user;
    });
  },
});

export default rtkSlice.reducer;
