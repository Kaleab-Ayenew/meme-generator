import React from 'react'
import MemeCard from './MemeCard'
import MemeList from './memeList'

export default function PopularMeme(){
    let memeArray = MemeList.data.memes
    let allMemes = memeArray.map((item)=>{
        return(<MemeCard props={item} />)
    }
        
    )
    return(
        <div className='meme-cards'>
            {allMemes}
        </div>
        
    )
}