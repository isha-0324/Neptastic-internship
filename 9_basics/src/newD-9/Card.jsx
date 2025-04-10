import React from "react";
function Card({tittle, description}){
    return(
        <div className="bg-green-700 px-14 py-8 text-white hover:bg-green-400 cursor-pointer border-2 border-gray-500 text-center text-black text-xl">
          <h3>{tittle}</h3>
          <p>{description}</p>
        </div>
    )
}
export default Card