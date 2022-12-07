import React from 'react'
import MemeCard from './MemeCard'
import MemeList from './memeList'

export default function PopularMeme(props){
    let n = props.ind
    let memeArray = MemeList.data.memes
    let allMemes = memeArray.map((item)=>{
        return(<MemeCard data={item} />)
    } )

    let meme = allMemes[n]


    let formData = props.inputData
    let setFormData = props.inputSetter
    console.log("This is a log from PopularMemes", formData)
    
    return(
        <div className='meme-cards'>
            {meme}
        </div>
        
    )
}