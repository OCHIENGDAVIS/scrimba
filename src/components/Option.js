import React, {Component} from 'react'

class Option extends Component{
    handleRemove = (option)=>{
        console.log(`${option} has been marked for removal`)
        this.props.removeOne(option)
    }
    render(){
        return(
            <div>
                <li>{this.props.option}</li> 
                <button onClick={(e)=>{this.props.removeOne(this.props.option)}}>remove</button> 
            </div>
            
        )
    }
}

export default Option
