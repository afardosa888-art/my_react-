import React, { useState } from "react";

function Tiriye() {
  // Declare a state variable "count" and initialize it to 0
  const[count, setCount] = useState(0);

  return (
    <div style={{backgroundColor:"yellow"}}>
      <h1>Count: {count}</h1>
      {/* Update the state on button click */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export { Tiriye };
