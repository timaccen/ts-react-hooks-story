import * as React from 'react';
// same as this but more future proofs// import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greetings } from './components/Greetings';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Greetings name="Test Name" />
      <Greetings 
        name="Test Name 2" 
        onSendWaves={() => {}} />
    </div>
  );
}

export function divide(a: number, b: number): number {
  // Cannot divide by 0,
  // so in this case we will throw an error.
  if (b === 0) {
    throw new Error("You can't divide by zero.");
  }
  // Return a round division result.
  return Math.round(a / b);
}

export default App;
