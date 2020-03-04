import React, {Component} from 'react'

class Action extends Component{
   
    render(){
        return(
            <div>
                <button onClick={this.props.pick} disabled={this.props.options.length <= 0 }>What should I do</button>
                <button onClick={this.props.remove} disabled={this.props.options.length <= 0 }>Remove all</button>
            </div>
        )
    }
}
export default Action