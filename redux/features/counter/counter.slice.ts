import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./counter.init";



export const counterSlice = createSlice({ //있는걸(store) 쪼개기
  name: "counter",
  initialState,
  reducers: {
    handlePlus: (state) => {
      state.value += 1;
    },
    handleMinus: (state) => {
      state.value -= 1;
    },
  },
});

export const { handlePlus, handleMinus } = counterSlice.actions;

export const getCount = (state: any) => state.count.value;

export default counterSlice.reducer;
