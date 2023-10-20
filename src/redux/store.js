import { configureStore } from '@reduxjs/toolkit';
import medicineSlice from './slices/medicineSlice';
import cartSlice from './slices/cartSlice';
import filterSlice from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    medicineSlice,
    cartSlice,
    filterSlice,
  },
});
