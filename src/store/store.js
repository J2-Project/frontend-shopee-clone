import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counter';

export const store = configureStore({
  reducer: {
    // Define a top-level state field named `counter`, handled by `counterReducer`
    counter: counterReducer,
  },
  devTools: true,
});