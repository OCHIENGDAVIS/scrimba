import React from 'react';
import './App.css'
import Header from './components/Header'
import Options from './components/Options'
import AddOptions from './components/AddOption'


function App() {
  return (
    <div>
      <h1>Indecision App</h1>
      <p>Put your life in the hands of a computer</p>
      <Options />
      <AddOptions />

    </div>
  );
}

export default App;

