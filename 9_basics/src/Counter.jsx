import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div style={{border: "1px solid #ccc", margin: "8px", padding:"6px"}}>
      <h2>Counter:{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
export default Counter;
