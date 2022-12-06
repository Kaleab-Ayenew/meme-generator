import React  from "react";


export default function MemeCard(props){
    let data = props.data
    return(
        <div className="meme-card-container">
            <span>
                {data.name}
            </span>
            <img src={data.url}/>
        </div>
    )
}