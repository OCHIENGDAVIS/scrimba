import React from 'react';
import Header from './components/Header'
import Action from './components/Action'
import Options from './components/Options'
import AddOptions from './components/AddOpton'
import './App.css'

class  App extends React.Component {
  constructor(props){
    super(props)
    this.handlePick = this.handlePick.bind(this)

  }
  state = {
    options : ['thing one', 'Thing two', 'Thing three' ]
  }
  handleAddOption = (option)=>{
    this.state.options.push(option)
    console.log(this.state)
  }
  handlePick(){
    const choiceIndex = Math.floor(Math.random()*this.state.options.le)
    const choice =this.state.options[choiceIndex]
    alert(choice)
  }
  render(){
    console.log(this.state)
    return(
      <div>
        <Header title="Indecision App" subtitle="Put your life in the hands of a computer"/>
        <Options options={this.state.options} />
        <Action pick={this.handlePick} />
        <AddOptions add={this.handleAddOption}/>
   
      </div>
      
    )
  }
  
  
}
 
export default App;


