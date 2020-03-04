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
  componentDidMount(){
    console.log('component did mount.....')
  }
  componentDidUpdate(prevProps, prevState){
    console.log('component did update here......')
    console.log(prevProps)
    console.log(prevState)
  }
  componentWillUnmount(){
    console.log('Component is going away ......')
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
    alert(this.state.options[choiceIndex])
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
  render(){

    return(
      <div>
        <Header title="Indecision App" subtitle="Put your life in the hands of a computer"/>
        <Options options={this.state.options} removeOne={this.removeOne} />
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


