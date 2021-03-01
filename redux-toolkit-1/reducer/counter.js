import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  //defined the state with initial value.
  initialState: {
    count: 0
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmmount: (state, action) => {
      state.count += action.payload;
    }
    // incrementByAmount: (state, action) => {
    //   state.count += action.payload;
    // }
  }
});

export const { increment, decrement, incrementByAmmount } = counterSlice.actions;

export default counterSlice.reducer;
