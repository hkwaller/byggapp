import React from 'react'
import Task from './Task'
import './tasks.css'

const SubHeader = ({ tasks }) => {
    console.log(tasks)
    return (
        <div className="tasks-container">
            {
                Object.keys(tasks).map(key => {
                    return <Task key={ key } task={ tasks[key] } />
                })
            }
        </div>
    )
}

export default SubHeader