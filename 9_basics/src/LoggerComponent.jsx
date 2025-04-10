import { useEffect } from "react";

function LoggerComponent(){
  useEffect(()=>{
    console.log("Component loaded")
  },[])
  return <p className="bg-green-700 px-14 py-8 text-white hover:bg-green-400 cursor-pointer border-2 border-gray-500 text-center text-black text-xl">Check the console log</p>
}
export default LoggerComponent