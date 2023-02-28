import { useState } from "react";

import CounterClass from "./CounterClass";
import CounterFunction from "./CounterFunction";

export default function Playground() {
  const [userName, setUserName] = useState("Jamie");
  const [displayClassComp, setDisplayClassComp] = useState(false);
  const [displayFunctionComp, setDisplayFunctionComp] = useState(false);

  const handleUserNameChange = () => {
    setUserName('Jam');
  }

  return (
    <>
      <h1>Playground</h1>
      <button onClick={handleUserNameChange}>Change User Name</button>



      <hr />
      <h2>Counter Class</h2>
      <label>
        <input 
            type="checkbox" 
            checked={displayClassComp}
            onChange={(e) => setDisplayClassComp(e.target.checked)}
        />
        Display Counter Class
      </label>
      {displayClassComp&& (
        <CounterClass userName={userName} />
      )}

      <hr />
      <h2>Counter Function</h2>
      <label>
      <input 
            type="checkbox" 
            checked={displayFunctionComp}
            onChange={(e) => setDisplayFunctionComp(e.target.checked)}
        />
        Display Counter Function
      </label>
      {displayFunctionComp&& (
        <CounterFunction userName={userName} />
      )}
    </>
  );
}
