import './App.css';
import Form from './components/Form'
import Header from './components/Header'
import ImageHolder from './components/ImageHolder'
import PopularMeme from './components/PopularMeme';

function App() {
  return (
    <div className='main-container'>
      <Header />
      <Form />
      <ImageHolder />
      <PopularMeme />
    </div>
  );
}

export default App;
