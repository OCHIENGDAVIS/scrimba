import React from 'react'
import Option from './Option'

const  Options = (props)=>{
    return(
        <div>
            <p>Here are your Options</p>
            <ul>
            {
                props.options.map((option, key)=>{
                    return <Option 
                        option={option} 
                        key={key}
                        removeOne={props.removeOne}
                    />
                })
            }
            </ul>
        </div>

    )
    
}
export default Options

