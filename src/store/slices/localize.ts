/* eslint-disable no-param-reassign */
import {createSlice} from '@reduxjs/toolkit';

interface LanguageState {
    language: string;
}

const initialState: LanguageState = {
  language: 'en',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    ToggleEnglish: (state: LanguageState) => {
      state.language = 'en';
    },
    ToggleNepali: (state: LanguageState) => {
      state.language = 'np';
    },
  },
});

export const {ToggleEnglish, ToggleNepali} = languageSlice.actions;

export default languageSlice.reducer;
