import { useState } from "react";

export default function CounterFunction() {
  const [count, setCount] = useState(0);
  const [lastAction, setLastAction] = useState("none");

  function handleIncrementClick() {
    setCount(count + 1);
    setLastAction("Increase");
  }

  function handleDecrementClick() {
    setCount(count - 1);
    setLastAction("Decrease");
  }

  return (
    <div>
      Counter: {count} || Last Action: {lastAction}
      <div>
        <button onClick={handleIncrementClick}>Increase</button>
        <button onClick={handleDecrementClick}>Decrease</button>
      </div>
    </div>
  );
}
