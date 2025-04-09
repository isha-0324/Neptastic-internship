import React from "react";
import Child from "./Child";

function AppChild(){
    const click = () => {
        alert("Hello child")
    }
    return(
        <div style={{border: "1px solid #ccc", margin: "8px", padding:"6px"}}>
            <h2>Parent component</h2>
            <Child clicked={click}/>
        </div>
    )
}
export default AppChild