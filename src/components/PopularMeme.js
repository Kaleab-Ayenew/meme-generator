import React from 'react'
import MemeCard from './MemeCard'
import MemeList from './memeList'

export default function PopularMeme(props){
    let n = props.ind
    let memeArray = MemeList.data.memes
    let meme = memeArray[n]
    // let allMemes = memeArray.map((item)=>{
    //     return(<MemeCard data={item} />)
    // } )
    return(
        <div className='meme-cards'>
            {meme}
        </div>
        
    )
}