import React from 'react'
import Task from './Task'
import './tasks.css'

const SubHeader = ({ tasks }) => {
    console.log(tasks)
    return (
        <div className="tasks-container">
            <h2>Arbetsbeskrivning</h2>
            <table>
                <tr className="tasks-header-row">
                    <th className="tasks-header-left">Beskrivning</th>
                    <th>Pris</th>
                </tr>
                {
                    Object.keys(tasks).map(key => {
                        return <Task key={ key } task={ tasks[key] } />
                    })
                }
            </table>
        </div>
    )
}

export default SubHeader