import React from "react";
import Child from "./Child";

function AppChild(){
    const click = () => {
        alert("Hello child")
    }
    return(
        <div className="bg-green-700 px-14 py-8 text-white hover:bg-green-400 cursor-pointer border-2 border-gray-500 text-center text-black text-xl">
            <h2>Parent component</h2>
            <Child clicked={click}/>
        </div>
    )
}
export default AppChild