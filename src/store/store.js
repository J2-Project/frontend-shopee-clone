import { configureStore } from '@reduxjs/toolkit';
import provinceSlice from './slices/provinceSlice';

export const store = configureStore({
  reducer: {
    provinces: provinceSlice
  }
});
