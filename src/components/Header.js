import React from 'react'
import logo from '../images/troll-face.png'
export default function Header(){
    return (
        <header className='header-container'>

            <div className='logo-holder'>
                <img src={logo} className="logo-img" alt="Logo"/>
                <span className='logo-text'>Meme Generator</span>
            </div>

            <span className='title'>
                React Course - Project 3
            </span>
            
        </header>
    )
}