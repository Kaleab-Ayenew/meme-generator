import React from "react";

export default function Box(props){
    let boxList = props.boxes
    let setBoxList = props.setBoxes
    
    let boxComps = boxList.map(
        (item)=>{
          return <Box {...item} />
        }
      )

    return(
        <div className="box-container">
            <div className={`box ${secondClass}`}>

            </div>
        </div>
    )
}