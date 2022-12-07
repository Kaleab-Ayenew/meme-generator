import React from 'react'

export default function Form(props){
    let setMemeInd = props.indUpdate //Pass the update function here
    let memeInd = props.ind

    let [formData, setFormData] = React.useState(
        {firstName:"", lastName:"", comment:"", isMale:true, ageGroup:"", favColor:""}
    )

    function clickHandler(){
        if (memeInd < 99){
            setMemeInd(oldVal=>oldVal+1)
            console.log(memeInd)
        }
        
    }
    console.log(formData)
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
        
        }



    return (
        <div className='form-container'>
            <form onSubmit={submitHandler}>
                <input name="firstName" onChange={inputHandler} placeholder="Enter Text on Top" 
                className='input-text1' value={formData.firstName}/>
                <input name="lastName" onChange={inputHandler} placeholder='Enter Text at Bottom' 
                className='input-text2' value={formData.lastName}/>
                <textarea bla="bla" name="comment" value={formData.comment} onChange={inputHandler} placeholder="Give us a comment"/>
                <br/>
                <br/>
                <label htmlFor='isMale'>
                    <input name="isMale" onChange={inputHandler} checked={formData.isMale} type="checkbox" id="isMale"/>Are you male?
                </label>
                <br/>
                <br/>
                <fieldset>
                    <legend>What is your age group:</legend>
                    <label htmlFor='child'>Child</label>
                    <input checked={formData.ageGroup === "child"} onChange={inputHandler} value="child" type="radio" name="ageGroup" id="child" />

                    <label htmlFor='child'>Young</label>
                    <input checked={formData.ageGroup === "young"} onChange={inputHandler} value="young" type="radio" name="ageGroup" id="young" />

                    <label htmlFor='child'>Old</label>
                    <input checked={formData.ageGroup === "old"} onChange={inputHandler} value="old" type="radio" name="ageGroup" id="old" />
                </fieldset>
                <br/>
                <br/>
                <select
                    name="favColor"
                    value={formData.favColor}
                    onChange={inputHandler}
                >
                    <option value="">--Choose a Color--</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="blue">Blue</option>
                    <option value="white">White</option>
                </select>
                <button className='generate-meme-button'>Generate Another Meme</button>
            </form>
            
        </div>
    )
}