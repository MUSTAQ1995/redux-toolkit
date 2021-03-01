import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmmount } from "./redux/counter";

export default function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>The count is: {count} </h1>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <button onClick={() => dispatch(incrementByAmmount(5))}>
        Increase By Ammount
      </button>
    </div>
  );
}
