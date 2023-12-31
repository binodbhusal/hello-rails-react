import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  greeting: '',
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {
    setGreeting: (state, action) => ({
      ...state,
      greeting: action.payload,
    }),
  },
});

export const { setGreeting } = greetingSlice.actions;

export default greetingSlice.reducer;
