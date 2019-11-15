import React from 'react';
import logo from './tecbotletras.png';
import './App.css';
import Prueba from './Teams.js';

function App() {
  return (
    <div>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo'/>
        </div>

        <form>
          <div>
            <Prueba/>
          </div>
        </form>
    </div>
  );
}

export default App;
