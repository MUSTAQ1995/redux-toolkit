import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, test } from "./redux/CounterSlice";

export default function App() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1> The counter Value is : {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(test({ testValue: 10 }))}>test</button>
    </div>
  );
}
