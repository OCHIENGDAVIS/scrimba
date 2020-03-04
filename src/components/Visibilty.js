import React, { Component } from 'react'

class Visibility extends Component{
    constructor(props){
        super(props)
        this.state = {
            show : false,
            btnText : '',
            text :'Here is some text to show'
        }
    }
    toggle = ()=>{
        this.setState((prevState)=>{
            return{
                show : !prevState.show
            }
        })
    }
    render(){
        return (
            <div>
                <button onClick={this.toggle}>{this.state.show ? 'hide text' : 'show text'}</button>
                {
                    this.state.show ? <p>{this.state.text}</p> : null
                }
            </div>
        )
    }
}

export default Visibility