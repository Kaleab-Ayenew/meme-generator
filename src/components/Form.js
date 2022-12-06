import React from 'react'

export default function Form(){
    function clickHandler(){
        console.log("The Meme Generator Button was clicked");
    }
    return (
        <div className='form-container'>
            <form>
                <input placeholder="Enter Text on Top" className='input-text1'/>
                <input placeholder='Enter Text at Bottom' className='input-text2'/>
            </form>
            <button onClick={clickHandler()} className='generate-meme-button'>Generate Another Meme</button>
        </div>
    )
}