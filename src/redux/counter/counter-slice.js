/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    addStep: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const {
  actions: { increment, decrement, addStep },
  reducer: counterReducer
} = counterSlice;
