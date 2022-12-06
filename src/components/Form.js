import React from 'react'

export default function Form(props){
    let setMemeInd = props.indUpdate
    let memeInd = props.ind
    function clickHandler(){
        if (memeInd < 99){
            setMemeInd(oldVal=>oldVal+1)
            console.log(memeInd)
        }
        
    }
    return (
        <div className='form-container'>
            <form>
                <input placeholder="Enter Text on Top" className='input-text1'/>
                <input placeholder='Enter Text at Bottom' className='input-text2'/>
            </form>
            <button onClick={clickHandler} className='generate-meme-button'>Generate Another Meme</button>
        </div>
    )
}