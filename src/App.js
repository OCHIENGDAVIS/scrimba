import React from 'react';
import './App.css'



function App() {
  let app = {
    title : 'Indecision APp',
    subtitle : 'Put your life in the hands of a computer'
  }
  let appExpresssion = (
    <div>
      <h1>{app.title}</h1> 
      <p>Age : {app.subtitle}</p>
    </div>
  )
    
  return  appExpresssion
}

export default App;

