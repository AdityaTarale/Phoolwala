import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  data: null,
  error: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: () => {},
    requestUser: state => {
      return {
        ...state,
        loading: true
      };
    },
    setUser: (state, action) => {
      const user = action.payload;
      return {
        ...state,
        data: user,
        loading: false
      };
    }
  }
});

export const {
  actions: { getUser, requestUser, setUser },
  reducer: userReducer
} = userSlice;
