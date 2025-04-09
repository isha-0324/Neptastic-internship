import React from "react";
function Child(props){
    return(
        <button onClick={props.clicked}>
            Click child
        </button>
    )
}
export default Child