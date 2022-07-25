import { createAction, createReducer } from "@reduxjs/toolkit";

export const increment = createAction("increment/counter");
export const decrement = createAction("decrement/counter");
export const increaseAmount = createAction("increaseamount/counter");
export const decreaseAmount = createAction("decreaseamount/counter");

// increment action run, it can be notified
let action = increment();
console.log("action", action);

// reducer
// 1. using builder notation
const initialState = {
  value: 0,
};

// export const counterSlices = createReducer(initialState, (builder) => {
//   builder.addCase(increment, (state, action) => {
//     state.value++;
//   });
//   builder.addCase(decrement, (state, action) => {
//     state.value--;
//   });
//   builder.addCase(increaseAmount, (state, action) => {
//     state.value += action.payload;
//   });
//   builder.addCase(decreaseAmount, (state, action) => {
//     state.value -= action.payload;
//   });
// });

// 2 map notation
export const counterSlices = createReducer(initialState, {
  [increment]: (state, action) => {
    state.value++;
  },
  [decrement]: (state, action) => {
    state.value--;
  },
  [increaseAmount]: (state, action) => {
    state.value += action.payload;
  },
  [decreaseAmount]: (state, action) => {
    state.value -= action.payload;
  },
});
