import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './reducers'; // Import your greeting slice reducer

const store = configureStore({
  reducer: {
    greeting: greetingReducer, // Assign your greeting slice reducer to the 'greeting' key
  },
});

export default store;
