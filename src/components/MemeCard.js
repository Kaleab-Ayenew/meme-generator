import React  from "react";


export default function MemeCard(props){

    return(
        <div className="meme-card-container">
            <span>
                {props.data.name}
            </span>
            <img src={props.url}/>
        </div>
    )
}