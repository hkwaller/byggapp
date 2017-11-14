import React from 'react'
import './tasks.css'

const Task = ({ task }) => {
    return (
        <tr className="tasks-container">
            <td>{ task.type }</td>
            <td>{ task.price }</td>
        </tr>
    )
}

export default Task