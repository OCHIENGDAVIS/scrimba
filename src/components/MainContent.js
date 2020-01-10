import React, {Component} from 'react'


class  MainContent extends Component {
    handlerSubmit =()=>{
        alert("Welcome to the party of coders")
    }
    render(){
        return (
            <div>
                <h1>Welcome to the world of react js</h1>
                <p>Make yourself comfortble with react js</p>
                <input type="checkbox" />
                <p>Placeholder text here</p>
                <input type="checkbox" />
                <p>Placeholder text here</p>
                <input type="checkbox" />
                <p>Placeholder text here</p>
                <input type="checkbox" />
                <p>Placeholder text here</p>
                <button onClick={this.handlerSubmit}>Make the World better</button>
    
    
            </div>
        )
    }
   
}

export default MainContent
