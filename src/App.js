import React from 'react';
import Header from './components/Header'
import Action from './components/Action'
import Options from './components/Options'
import AddOptions from './components/AddOpton'
import Counter from './components/Counter'
import Visibilty from './components/Visibilty'
import OptionModal from './components/Modal'
import './App.css'


class  App extends React.Component {
  state = {
    options : [],
    isOpen : false,
    choice : undefined
  }
  handleAddOption = (option)=>{
    this.setState((prevState)=>{
      return{
        options : prevState.options.concat(option)
      }
    })
  }
  handlePick = ()=>{
    let choiceIndex = Math.floor(Math.random()*this.state.options.length)
    this.setState((prevState)=>{
      return {
        isOpen : !prevState.isOpen,
        choice : prevState.options[choiceIndex]
       
      }
    })
    console.log()
  }
  remove = ()=>{
    this.setState(()=>{
      return{
        options : []
      }
    })
  }
  removeOne= (one)=>{
    this.setState((prevState)=>{
      return {
        options : prevState.options.filter((x)=>x!==one)
      }
    })
  }
  closeModal = ()=>{
    this.setState((prevState)=>{
      return {
        isOpen : !prevState.isOpen
      }
    })
  }
  render(){

    return(
          
          <div >
            <Header title="Indecision App" subtitle="Put your life in the hands of a computer"/>
            <Options options={this.state.options} removeOne={this.removeOne} />
            <Action pick={this.handlePick}  remove={this.remove} options={this.state.options} />
            <OptionModal choice={this.state.choice} isOpen={this.state.isOpen} close={this.closeModal}/>
            <AddOptions add={this.handleAddOption}/>
          </div>

      
    )
  }
  
  
}
 
export default App;


