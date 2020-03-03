import React, {Component} from 'react'

class Action extends Component{
    remove(){
        alert('remove all')
    }
  
    render(){
        return(
            <div>
                <button onClick={this.props.pick}>What should I do</button>
                <button onClick={this.remove}>Remove all</button>
            </div>
        )
    }
}
export default Action