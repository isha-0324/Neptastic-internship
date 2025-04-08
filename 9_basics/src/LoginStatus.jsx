import { useState } from "react";

function LoggerComponent(){
  const [isLogin,setIsLogin]=useState(false)
  return(
    <div>
      <p>{isLogin ? "Welcome back" : "Please Login"}</p>
      <button onClick={() => setIsLogin(!isLogin)}>Toggle</button>
    </div>
  )
}
export default LoggerComponent