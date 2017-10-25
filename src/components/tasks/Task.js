import React from 'react'
import './tasks.css'

const Task = ({ task }) => {
    return (
        <div className="tasks-container">
            <h3>{ task.type } - { task.price }</h3>
        </div>
    )
}

export default Task