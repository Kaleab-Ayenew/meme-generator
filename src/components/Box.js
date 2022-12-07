import React from "react";

export default function Box(props){
    let boxList = props.boxes
    let setBoxList = props.setBoxes

    function boxClickHandler(ind, event){
        let newBoxArray = [...boxList]
        newBoxArray[ind].on = !newBoxArray[ind].on
        setBoxList(newBoxArray)
    }

    let boxComps = boxList.map(
        (item, index)=>{
            let secondClass = item.on ? "box-on" : "box-off"
            return <div key={item.id} onClick={(event)=>(boxClickHandler(index, event))} className={`box ${secondClass}`}></div>
        }
      )

    return(
        <div className="box-container">
            {boxComps}
        </div>
    )
}