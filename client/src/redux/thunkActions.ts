import { AsyncThunk, createAsyncThunk, Dispatch } from '@reduxjs/toolkit';
import axiosInstance from '../axiosInstance';
import { Themes, Questions, User } from '../types/statesTypes';
import { Inputs, InputsAuth, RefreshRes } from '../types/types';

type AsyncThunkConfig = {
  dispatch?: Dispatch;
};

type AuthResponse = {
  user: User;
  accessToken: string;
};


export const fetchThemes = createAsyncThunk<Themes[], void, AsyncThunkConfig>(
  'themes/all',
  async () => {
    const response = await axiosInstance.get<Themes[]>(
      `${import.meta.env.VITE_API}/themes`
    );
    return response.data;
  });

export const fetchQuestions = createAsyncThunk<Questions[], void, AsyncThunkConfig>(
  'questions/all',
  async () => {
    const response = await axiosInstance.get<Questions[]>(
      `${import.meta.env.VITE_API}/questions`
    );
    return response.data;
  });

export const fetchQuestion = createAsyncThunk<Questions, number, AsyncThunkConfig>(
  'question/one',
  async (id) => {
    const response = await axiosInstance.get<Questions>(`${import.meta.env.VITE_API}/questions/${id}`);
    return response.data;
  });


export const fetchAuthUser: AsyncThunk<
  AuthResponse,
  { inputs: InputsAuth; type: string | number },
  AsyncThunkConfig
> = createAsyncThunk('users/add', async (data) => {
  const response = await axiosInstance.post(
    `${import.meta.env.VITE_API}/auth/${data.type}`,
    data.inputs
  );
  return response.data;
});

export const fetchLogoutUser: AsyncThunk<boolean, void, AsyncThunkConfig> =
  createAsyncThunk('users/logout', async () => {
    await axiosInstance.get(`${import.meta.env.VITE_API}/auth/logout`);
    return true;
  });

  export const fetchRefresh: AsyncThunk<AuthResponse, void, AsyncThunkConfig> = 
  createAsyncThunk('users/id', async () => {
    const response = await axiosInstance.get<RefreshRes>(`api/v1/tokens/refresh`);
    return response.data;
  });