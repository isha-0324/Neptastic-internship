import { useState } from "react";
function Input(){
    const [text,setText]=useState("")
    return(
        <div className="bg-green-700 px-14 py-8 text-white hover:bg-green-400 cursor-pointer border-2 border-gray-500 text-center text-black text-xl">
            <p>Type here:{text}</p>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Text me" className="bg-green-200 px-2 py-2 border-2 border-black rounded-md" />
        </div>
    )
}
export default Input