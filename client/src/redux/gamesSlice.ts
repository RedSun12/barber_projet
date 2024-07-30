import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Themes, Questions } from '../types/statesTypes';
import { fetchThemes, fetchQuestions, fetchQuestion } from './thunkActions';

type InitialState = {
  themes: Themes[];
  questions: Questions[];
  selectedQuestion: Questions | null;
};

const initialState: InitialState = {
  themes: [],
  questions: [],
  selectedQuestion: null,
};

const gamesSlice = createSlice({
  name: 'gamesSlice',
  initialState,
  reducers: {
    setSelectedQuestion: (state, action: PayloadAction<Questions | null>) => {
      state.selectedQuestion = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchThemes.fulfilled, (state, action: PayloadAction<Themes[]>) => {
      state.themes = action.payload;
    });
    builder.addCase(fetchQuestions.fulfilled, (state, action: PayloadAction<Questions[]>) => {
      state.questions = action.payload;
    });
    builder.addCase(fetchQuestion.fulfilled, (state, action: PayloadAction<Questions>) => {
      state.selectedQuestion = action.payload;
    });
  },
});

export default gamesSlice.reducer;
export const { setSelectedQuestion } = gamesSlice.actions;