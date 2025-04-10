import { useState } from "react";

function LoggerComponent() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="bg-green-700 px-14 py-8 text-white hover:bg-green-400 cursor-pointer border-2 border-gray-500 text-center text-black text-xl">
      <p>{isLogin ? "Welcome back" : "Please Login"}</p>
      <button onClick={() => setIsLogin(!isLogin)}>Toggle</button>
    </div>
  );
}
export default LoggerComponent;
