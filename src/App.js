import './App.css';
import React from 'react';
import Form from './components/Form'
import Header from './components/Header'
import ImageHolder from './components/ImageHolder'
import PopularMeme from './components/PopularMeme';

function App() {

  let memeInd = 
  return (
    <div className='main-container'>
      <Header />
      <Form />
      {/* <ImageHolder /> */}
      <PopularMeme />
    </div>
  );
}

export default App;
