import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems(state, action) {
       const findItem = state.items.find(item => item.id === action.payload.id)
      if(findItem) {
        findItem.count++
      } else {
        state.items.push({
          ...action.payload,
          count: 1
        })
      }
       state.totalPrice = state.items.reduce((sum,obj) => {
         console.log(sum + obj.price)
        return obj.price + sum
      },0)
    },
    removeItem(state,action) {
      state.items = state.items.filter(obj => obj.id !== action.payload)
    },
    clearItem(state,action) {
      state.items = []
    }
  },
});

export const { addItems,removeItem,clearItem } = cartSlice.actions;

export default cartSlice.reducer;
