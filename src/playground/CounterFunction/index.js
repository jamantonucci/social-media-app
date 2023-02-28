import { useState, useRef, useEffect } from "react";

export default function CounterFunction({userName}) {
  const [count, setCount] = useState(0);
  const [lastAction, setLastAction] = useState("none");

  useEffect(() => { 
    console.log('Effect triggered');
  });

  useEffect(() => {
    console.log('Counter changed');
  }, [count]);

  useEffect(() => {
    console.log('Last action changed');
  }, [lastAction])

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

  console.log("Function component rendered");

  return (
    <div>
      Counter for {userName}: {count} 
      <br /> 
      Last Action: {lastAction}
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
