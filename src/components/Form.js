import React from 'react'

export default function Form(props){
    let setMemeInd = props.indUpdate //Pass the update function here
    let memeInd = props.ind

    let [formData, setFormData] = React.useState(
        {firstName:"", lastName:"", comment:"", isMale:true}
    )

    function clickHandler(){
        if (memeInd < 99){
            setMemeInd(oldVal=>oldVal+1)
            console.log(memeInd)
        }
        
    }

    function inputHandler(event){
        const {name,value, type, checked} = event.target

        setFormData((oldData)=>{
            return (
                {
                    ...oldData,
                    [name]: type==="checkbox" ? checked : value
                }
            )
        })
        console.log(formData)

        

    }

    return (
        <div className='form-container'>
            <form>
                <input name="firstName" onChange={inputHandler} placeholder="Enter Text on Top" 
                className='input-text1' value={formData.firstName}/>
                <input name="lastName" onChange={inputHandler} placeholder='Enter Text at Bottom' 
                className='input-text2' value={formData.lastName}/>
                <textarea name="comment" value={formData.comment} onChange={inputHandler} placeholder="Give us a comment"/>
                <label htmlFor='isMale'>
                    <input name="isMale" onChange={inputHandler} checked={formData.isMale} type="checkbox" id="isMale"/>Are you male?
                </label>
            </form>
            <button onClick={clickHandler} className='generate-meme-button'>Generate Another Meme</button>
        </div>
    )
}