import React  from "react";


export default function MemeCard(props){
    console.log(props)
    return(
        <div className="meme-card-container">
            <span>
                {props.name}
            </span>
            <img src={props.url}/>
        </div>
    )
}