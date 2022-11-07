import { configureStore } from '@reduxjs/toolkit'
import medicineSlice from './medicineSlice'

export const store = configureStore({
    reducer: {
        medicineSlice
    },
})

