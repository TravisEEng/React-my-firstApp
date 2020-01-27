import React from 'react'

const useroutput = (props) => {
    return (
        <div className="input-output">
            <h1>User output</h1>
            <p>This is multiple text to showcase the useroutput component</p>
            <p>Will find more stuff to put here soon: {props.username}</p>
        </div>
    )
}

export default useroutput;