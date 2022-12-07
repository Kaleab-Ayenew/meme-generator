import './App.css';
import React from 'react';
import Form from './components/Form'
import Header from './components/Header'
import ImageHolder from './components/ImageHolder'
import PopularMeme from './components/PopularMeme'
import Box from './components/Box'
import boxArray from './components/BoxList';

function App() {

  let [memeInd, setMemeInd] = React.useState(0);

  let [boxList, setBoxList] = React.useState(boxArray)

  return (
    <div className='main-container'>
      <Header />
      <Form ind={memeInd} indUpdate={setMemeInd} />
      {/* <ImageHolder /> */}
      <PopularMeme ind={memeInd} />
      {/* <Box boxes={boxList} setBoxes={setBoxList} /> */}
    </div>
  );
}

export default App;
