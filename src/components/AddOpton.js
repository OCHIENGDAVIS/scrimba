import React, {Component} from 'react'


class AddOption extends Component{
    state ={
        option : '',
        error : false
    }
    addOption = ()=>{
        if(this.state.option === ''){
            this.setState(()=>{
                return {
                    error : true
                }
            })
        }
        else{
            this.props.add(this.state.option)
            this.setState(()=>{
                return {
                    error : false,
                    option : ''
                }
            })
        }
        
    }

    handleAddOption = (e)=>{
        e.preventDefault()
        e.persist()
        const option = e.target.value
        this.setState(()=>{
            return {
                option : option
            }
        })
        

    }
    render(){
        return (
            <div className="container">
                
                    <input 
                        type="text" 
                        placeholder="Your option" 
                        name="option"  
                        value={this.state.option}
                        onChange={this.handleAddOption}
                    />
                    
                    <button onClick={this.addOption} className="btn btn-add">Add Option</button> <br />
                    {this.state.error ? <span className='error'>*Option cannot be empty*</span> : undefined}
                
            </div>
        )
    }
}

export default AddOption