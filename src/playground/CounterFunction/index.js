import { useState, useRef } from "react";

export default function CounterFunction() {
  const [count, setCount] = useState(0);
  const [lastAction, setLastAction] = useState("none");

  const inputIncrease = useRef();
  const inputDecrease = useRef();

  function handleIncrementClick() {
    setCount(count + 1);
    setLastAction("Increase");
    inputIncrease.current.focus();
  }

  function handleDecrementClick() {
    setCount(count - 1);
    setLastAction("Decrease");
    inputDecrease.current.focus();
  }

  return (
    <div>
      Counter: {count} || Last Action: {lastAction}
      <div>
        <input
          type="text"
          placeholder="Focus on increase"
          ref={inputIncrease}
        />
      </div>
      <div>
        <button onClick={handleIncrementClick}>Increase</button>
        <button onClick={handleDecrementClick}>Decrease</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Focus on decrease"
          ref={inputDecrease}
        />
      </div>
    </div>
  );
}
