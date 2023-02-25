import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstInitialization: true,
  language: 'en',
  theme: 'light'
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      return {
        ...state,
        language: action.payload
      };
    },

    changeTheme: (state, action) => {
      return {
        ...state,
        theme: action.payload === 'dark' ? 'dark' : 'light'
      };
    }
  }
});

export const {
  actions: { changeLanguage, changeTheme },
  reducer: appReducer
} = appSlice;
