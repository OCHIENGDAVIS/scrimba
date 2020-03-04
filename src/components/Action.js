import React, {Component} from 'react'

const Action = (props)=>{
   
   
        return(
            <div>
                <button onClick={props.pick} disabled={props.options.length <= 0 }>What should I do</button>
                <button onClick={props.remove} disabled={props.options.length <= 0 }>Remove all</button>
            </div>
        )
}
export default Action