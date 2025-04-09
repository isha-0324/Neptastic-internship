import { useState } from "react";
function Input(){
    const [text,setText]=useState("")
    return(
        <div style={{border: "1px solid #ccc", margin: "8px", padding:"6px"}}>
            <p>Type here:{text}</p>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Text me"/>
        </div>
    )
}
export default Input