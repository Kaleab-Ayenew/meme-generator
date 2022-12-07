import React from "react";

export default function Box(props){
    let boxList = props.boxes
    let setBoxList = props.setBoxes

    let boxComps = boxList.map(
        (item)=>{
            let secondClass = item.on ? "box-on" : "box-off"
            return <div className={`box ${secondClass}`}></div>
        }
      )

    return(
        <div className="box-container">
            {boxComps}
        </div>
    )
}