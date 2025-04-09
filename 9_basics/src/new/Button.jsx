import React from "react";
function Button(){
    const click=() => {
       alert("Button clicked.")
    }
    return(
        <div style={{border: "1px solid #ccc", margin: "8px", padding:"6px"}}>
            <button onClick={click}>
               Click here
            </button>
        </div>
        
    )
}
export default Button