import React from "react";
function Button(){
    const click=() => {
       alert("Button clicked.")
    }
    return(
        <div className="bg-green-700 px-14 py-8 text-white hover:bg-green-400 cursor-pointer border-2 border-gray-500 text-center text-black text-xl">
            <button onClick={click} className="bg-green-200 px-4 py-4 border-2 border-black rounded-md">
               Click here
            </button>
        </div>
        
    )
}
export default Button