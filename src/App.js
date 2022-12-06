import './App.css';
import React from 'react';
import Form from './components/Form'
import Header from './components/Header'
import ImageHolder from './components/ImageHolder'
import PopularMeme from './components/PopularMeme';

function App() {

  let [memeInd, setMemeInd] = React.useState(0);
  return (
    <div className='main-container'>
      <Header />
      <Form indUpdate={setMemeInd} />
      {/* <ImageHolder /> */}
      <PopularMeme ind={memeInd} />
    </div>
  );
}

export default App;
