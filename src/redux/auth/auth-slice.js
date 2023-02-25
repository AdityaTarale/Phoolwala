import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  deviceId: null,
  timeStamp: null,
  accessToken: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setDeviceId: (state, action) => {
      return {
        ...state,
        deviceId: action.payload
      };
    },
    setTimeStamp: (state, action) => {
      return {
        ...state,
        timeStamp: action.payload
      };
    },
    setAccessToken: (state, action) => {
      return {
        ...state,
        accessToken: action.payload
      };
    }
  }
});

export const {
  actions: { setDeviceId, setTimeStamp, setAccessToken },
  reducer: authReducer
} = authSlice;
