import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  medicine: [],
  status: false,
};

export const fetchMedicine = createAsyncThunk(async () => {
  const { data } = await axios.get(
    "https://6368ce8715219b84960742ec.mockapi.io/medicine"
  );
  console.log(data)
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
});

export const {} = medicineSlice.actions;

export default medicineSlice.reducer;
