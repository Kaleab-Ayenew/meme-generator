import React from 'react'

export default function Form(){
    return (
        <div className='form-container'>
            <form>
                <input placeholder="Enter Text on Top" className='input-text1'/>
                <input placeholder='Enter Text at Bottom' className='input-text2'/>
            </form>
            <button className='generate-meme-button'>Generate Another Meme</button>
        </div>
    )
}