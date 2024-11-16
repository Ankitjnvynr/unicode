// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import messagingReducer from './features/messagingSlice';

const store = configureStore({
  reducer: {
    messaging: messagingReducer,
  },
});

export default store;
