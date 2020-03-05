import React from 'react'

const Header  = (props)=>{
        return (
            <div className="header">
                <div className="container"> 
                    <h1>{props.title}</h1>
                    <p>{props.subtitle}</p>
                </div>
                
            </div>
        )
    
}

export default Header