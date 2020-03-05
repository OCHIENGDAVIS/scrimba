import React from 'react'
import Option from './Option'

const  Options = (props)=>{
    return(
        <div>
            <div className="container container-main">
                {props.options.length > 0 ? <p className="">Here are your Options</p> : <p>No options, please add some.</p>}
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
            
        </div>

    )
    
}
export default Options

