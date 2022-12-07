import React from 'react'
import MemeCard from './MemeCard'
import MemeList from './memeList'

export default function PopularMeme(props){

    let formData = props.inputData
    let setFormData = props.inputSet


    let n = props.ind
    let memeArray = MemeList.data.memes
    let allMemes = memeArray.map((item)=>{
        return(<MemeCard data={{...item, upperText:formData.firstName, lowerText:formData.lastName}} />)
    } )

    let meme = allMemes[n]

    console.log(formData)
    

    
    return(
        <div className='meme-cards'>
            {meme}
        </div>
        
    )
}