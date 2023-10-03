import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  medicine: [],
  status: false,
};

export const fetchMedicine = createAsyncThunk('fetch/Medicine',async (params) => {
  const {category, search} = params
  const { data } = await axios.get(
    `https://6368ce8715219b84960742ec.mockapi.io/medicine?${category}${search}`
  );
  return data;
});

export const medicineSlice = createSlice({
  name: "medicine",
  initialState,
  reducers: {
    getMedicine: (state, action) => {
        state.medicine = action.payload
    },
  },
  extraReducers:(builder => {
    builder.addCase(fetchMedicine.fulfilled,(state,action) => {
      state.medicine = action.payload
    })
  } )
});

export const { getMedicine } = medicineSlice.actions;

export default medicineSlice.reducer;
