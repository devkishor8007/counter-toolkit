import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import {
  decrement,
  increment,
  increaseAmount,
  decreaseAmount,
} from "./redux/slices/counter.slices";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  console.log(counter);
  return (
    <div className="App">
      <h1>Redux toolkit counter app</h1>
      <h2>Counter: {counter.value}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increaseAmount(20))}>
        increase amount by 20
      </button>
      <button onClick={() => dispatch(decreaseAmount(20))}>
        decrement amount by 20
      </button>
    </div>
  );
}

export default App;
