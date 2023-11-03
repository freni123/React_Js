import logo from './logo.svg';
import './App.css';
import Home from './Componets/Home';
import Shop from './Componets/Shop';
import Delivery from './Componets/Delivery';
import Ourapp from './Componets/Ourapp';
import About from './Componets/About';
import Contact from './Componets/Contact';

function App() {
  return (
    <div className="App">
      <div className='home'>
        <Home/>
      </div>
      <div className='shop'>
        <Shop/>
      </div>
      <div className='delivery'>
        <Delivery/>
      </div>
      <div className='ourapp'>
        <Ourapp/>
      </div>
      <div className='about'>
        <About/>
      </div>
      <div className='contact'>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
