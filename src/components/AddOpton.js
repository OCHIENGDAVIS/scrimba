import React, {Component} from 'react'


class AddOption extends Component{
    handleAddOption = (e)=>{
        e.preventDefault()
        e.persist()
        const option = e.target.option.value
        if(option.trim()){
             this.props.add(option)
        }
        
    }
    render(){
        console.log(this.props)
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" placeholder="Your option" name="option" />
                    <button >Add Option</button>
                </form>
            </div>
        )
    }
}

export default AddOption