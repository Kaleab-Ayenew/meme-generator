import React from 'react'

export default function Form(){
    return (
        <div className='form-container'>
            <form>
                <input className='input-text1'/>
                <input className='input-text2'/>
            </form>
            <button className='generate-meme-button'>Generate Another Meme</button>
        </div>
    )
}