import React from "react"
import Bin from "./assets/Bin.svg"

export default function Task(props){
    return (
        <div className="task-container">
            <h3 className="task">{props.task}</h3>
            <img onClick={props.handleClick} src={Bin} className="delete" alt="" />
        </div>
        
    )
} 