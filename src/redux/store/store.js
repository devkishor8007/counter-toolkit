import { configureStore } from "@reduxjs/toolkit";
import { counterSlices } from "../slices/counter.slices";

const store = configureStore({
  reducer: {
    counter: counterSlices,
  },
});

export default store;
