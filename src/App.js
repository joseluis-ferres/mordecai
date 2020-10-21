import React from 'react';
import Atom from './Components/Atom';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Atom />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Manu
        </a>
      </header>
    </div>
  );
}

export default App;
