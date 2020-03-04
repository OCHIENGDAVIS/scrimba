import React from 'react'

const Option  = (props)=>{
  
        return(
            <div>
                <li>{props.option}</li> 
                <button onClick={(e)=>{props.removeOne(props.option)}}>remove</button> 
            </div>
            
        )
    }


export default Option
