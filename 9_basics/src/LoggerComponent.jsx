import { useEffect } from "react";

function LoggerComponent(){
  useEffect(()=>{
    console.log("Component loaded")
  },[])
  return <p>Check the console log</p>
}
export default LoggerComponent