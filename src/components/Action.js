import React from 'react'

const Action = (props)=>{
   
   
        return(
            <div>
                <div className="container container-remove-all">
                    <button 
                    onClick={props.pick} 
                    disabled={props.options.length <= 0 }
                    className="bigButton"
                        >What should I do?</button>
                    <button 
                    onClick={props.remove} 
                    disabled={props.options.length <= 0 }
                    className="btn"
                    
                    
                    >Remove all</button>
                </div>
                
            </div>
        )
}
export default Action