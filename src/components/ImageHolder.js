import React from 'react'
import memeImg from '../images/dog-meme.jpg'

export default function ImageHolder(){
    function hoverHandler(){
        console.log(this)
    }

    return (
        <div className='image-container'>
            <img src={memeImg} alt="the-image"></img>
        </div>
    )
}