import { configureStore } from '@reduxjs/toolkit'
import medicineSlice from './slices/medicineSlice'
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
    reducer: {
        medicineSlice,
        cartSlice
    },
})

