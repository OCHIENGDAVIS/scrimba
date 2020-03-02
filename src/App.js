import React from 'react';
import './App.css'



function App() {
  let app = {
    
    subtitle : 'Put your life in the hands of a computer',
    options : []
  }
  let appExpresssion = (
    <div>
     {app.title && <div><h1>{app.title}</h1><p>{app.subtitle}</p></div>}
     {app.options.length >0 && <ul><li>one</li><li>two</li></ul>}
    </div>
  )
  let user = {
    username : 'Davis',
    age : 17,
   
  }
  function getLocation(location){
    if(location){
      return true
    }
    else{
      return false
    }
    
  }
  let userExpresssion = (
    <div>
      <h1>{user.username}</h1> 
     { user.age > 18 ?  <p>Age : {user.age}</p> : undefined}
      {/* <p>location : {getLocation()}</p> */}
      {getLocation() ? <p>Location : {'Kenya'}</p>  : undefined}
      {false}
    </div>
  )
    
  return  appExpresssion
}

export default App;

