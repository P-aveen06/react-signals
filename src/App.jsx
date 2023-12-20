import { useState } from "react";
import "./App.css";
import Counter from "./component/Counter";



function App() {
  const [counterState, setCounterState] = useState(false);

  console.log("App rendered")

  return (
    <>
      <button onClick={() => setCounterState(!counterState)}>
        {counterState ?"Disable Counter":"Show Counter"}
        </button>
      {counterState && (
       <Counter/>
      )}
    </>
  );
}

export default App;
