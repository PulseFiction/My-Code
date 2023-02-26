import React from "react"

export default function AddTask(props) {
    return (
        <div className="user-input-container">
            <input className="user-input" type="text" placeholder="Add your new todo" />
            <button className="add-button" onClick={props.handleClick}>+</button>
        </div>
        
        
    )
}