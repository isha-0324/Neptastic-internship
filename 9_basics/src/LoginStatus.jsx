import { useState } from "react";

function LoggerComponent() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div style={{border: "1px solid #ccc", margin: "8px", padding:"6px"}}>
      <p>{isLogin ? "Welcome back" : "Please Login"}</p>
      <button onClick={() => setIsLogin(!isLogin)}>Toggle</button>
    </div>
  );
}
export default LoggerComponent;
