import React from 'react';
import './App.css';
import CountRules from './components/countRules';

export const add = (num1,num2) => (num1+num2);

function App() {
  return (
    <div className="App">
      <h1>Web Application Testing</h1>
      <CountRules />
    </div>
  );
}

export default App;
