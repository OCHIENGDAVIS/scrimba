import React from 'react';
import Header from './components/Header'
import Action from './components/Action'
import Options from './components/Options'
import AddOptions from './components/AddOpton'
import Counter from './components/Counter'
import Visibilty from './components/Visibilty'
import './App.css'

class  App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      options : []
    }

  }
  handleAddOption = (option)=>{
    this.setState((prevState)=>{
      return{
        options : prevState.options.concat(option)
      }
    })
  }
  handlePick = ()=>{
    // alert('Picking what to do')
    let choiceIndex = Math.floor(Math.random()*this.state.options.length)
    alert(this.state.options[choiceIndex])
  }
  remove = ()=>{
    this.setState(()=>{
      return{
        options : []
      }
    })
  }
  render(){
    console.log(this.state)
    return(
      <div>
        <Header title="Indecision App" subtitle="Put your life in the hands of a computer"/>
        <Options options={this.state.options} />
        <Action pick={this.handlePick}  remove={this.remove} options={this.state.options} />
        <AddOptions add={this.handleAddOption}/>

        <hr />
        <Counter />
        <Visibilty />
   
      </div>
      
    )
  }
  
  
}
 
export default App;


