import React from 'react'

const userinput = (props) =>{
    return (
        <div className="input-output">
            <h1>User input</h1>
            <input type="text" onChange={props.changed} value={props.username}></input>
        </div>
    )
}

export default  userinput;