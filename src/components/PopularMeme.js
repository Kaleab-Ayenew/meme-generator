import React from 'react'
import MemeCard from './MemeCard'
import MemeList from './memeList'

export default function PopularMeme(){
    let MemeArray = MemeList.data.memes
    let allMemes = memes.map((item)=>{
        return(<MemeCard props={item} />)
    }
        
    )
    return(
        {allMemes}
    )
}