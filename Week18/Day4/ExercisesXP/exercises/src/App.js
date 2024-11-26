import './App.css';
// import { useState } from 'react';
import Car from './components/Car';
import Color from './components/Color';
import Events from './components/Events';
import Phone from './components/Phone';

function App() {
  const carinfo = {name: "Ford", model: "Mustang"};                    
  return (
    <div className="App">
      <Car carinfo={carinfo}/>
      <Events />
      <Phone />
      <Color />
    </div>
  );
}

export default App;
