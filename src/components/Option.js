import React from 'react'

const Option  = (props)=>{
  
        return(
            <div className="listItem">
                <li>{props.option}</li> 
                <button 
                onClick={(e)=>{props.removeOne(props.option)}}
                className="btn-link"
                
                >remove</button> 
            </div>
            
        )
    }


export default Option
