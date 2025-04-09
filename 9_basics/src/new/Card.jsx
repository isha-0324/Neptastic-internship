import React from "react";
function Card({tittle, description}){
    return(
        <div style={{border: "1px solid #ccc", margin: "8px", padding:"6px"}}>
          <h3>{tittle}</h3>
          <p>{description}</p>
        </div>
    )
}
export default Card