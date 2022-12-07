import React  from "react";


export default function MemeCard(props){
    let data = props.data
    return(
        <div className="meme-card-container">
            <span className="upper-text">
                {data.upperText}
            </span>
            <span className="lower-text">
                {data.lowerText}
            </span>
            <img src={data.url}/>
        </div>
    )
}