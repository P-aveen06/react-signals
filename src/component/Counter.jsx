import { effect, signal } from "@preact/signals-react";
import React, { useState } from "react";

const count = signal(0);

effect(()=>{
    console.log(count.value)
})

function Counter() {
  const [countValue, setCountValue] = useState(0);
  console.log("Counter Rendered");

  return (
    <div>
      <p>Without State: {count}</p>
      <p>With State: {countValue}</p>
      <button onClick={() => count.value++} style={{ margin: "0rem 1rem" }}>
        Without State
      </button>
      <button onClick={() => setCountValue((count) => count + 1)}>
        With State
      </button>
    </div>
  );
}

export default Counter;
