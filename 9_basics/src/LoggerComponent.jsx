import { useEffect } from "react";

function LoggerComponent(){
  useEffect(()=>{
    console.log("Component loaded")
  },[])
  return <p style={{border: "1px solid #ccc", margin: "8px", padding:"6px"}}>Check the console log</p>
}
export default LoggerComponent