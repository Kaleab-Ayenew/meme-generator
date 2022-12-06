import React from 'react'
import MemeCard from './MemeCard'
import MemeList from './memeList'

export default function PopularMeme(){
    let memeArray = MemeList.data.memes
    // let allMemes = memeArray.map((item)=>{
    //     return(<MemeCard data={item} />)
    // } )
    return(
        <div className='meme-cards'>
            {allMemes}
        </div>
        
    )
}