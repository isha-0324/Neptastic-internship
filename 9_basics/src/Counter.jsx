import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-green-700 px-14 py-8 text-white hover:bg-green-400 cursor-pointer border-2 border-gray-500 text-center text-black text-xl">
      <h2>Counter:{count}</h2>
      <button onClick={() => setCount(count + 1)} className="bg-red-100 text-xl px-4 py-1 border-2 border-black">+</button>
      <button onClick={() => setCount(count - 1)} className="bg-red-100 text-xl px-4 py-1 border-2 border-black">-</button>
    </div>
  );
}
export default Counter;
