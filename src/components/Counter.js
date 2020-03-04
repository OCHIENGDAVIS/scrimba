import React, { Component } from 'react'

class Counter extends Component{
    state = {
        count : 0
    }
    add = ()=>{
        console.log('add one.....')
        this.setState((prevState)=>{
            console.log(prevState)
            return{
                count : prevState.count + 1
            }
        })
    }
    subtract = ()=>{
        console.log('remove one....')
        this.setState((prevState)=>{
            return {
                count : prevState.count -1
            }
        })
    }
    reset = ()=>{
        console.log('setting....')
        this.setState((prevState)=>{
            return {
                count : 0
            }
        })
    }
    render(){
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.add}>Add One</button>
                <button onClick={this.subtract}>Subtract One</button>
                <button onClick={this.reset}>Reset</button>
                

            </div>
        )
    }
}

export default Counter