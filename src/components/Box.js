import React from "react";

export default function Box(props){
    let className = props.on ? "box-on" : "box-off";
    return(
        <div className="box-container">
            <div className={`box ${secondClass}`}>
                
            </div>
        </div>
    )
}