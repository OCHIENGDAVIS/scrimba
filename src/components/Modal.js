import React from 'react'

import Modal from 'react-modal';

const OptionModal = (props)=> {
        return (
            <div className="container">
                <Modal
                    isOpen={props.isOpen}
                    contentLabel={'Selected option'}
                    ariaHideApp={false}
                    onRequestClose={props.close}
                    >
                    <h3>Selected Option</h3>
                    {
                        !!props.choice ? <p>{props.choice}</p> : null
                    }
                    {console.log(props.choice)}
                    <button onClick={props.close}>Okay</button>

                </Modal>
            </div>
        )
}

export default OptionModal