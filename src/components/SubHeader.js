import React from 'react'
import './sub-header.css'

const SubHeader = ({ title }) => {
    return (
        <div className="subheader-container">
            <h3>{ title }</h3>
        </div>
    )
}

export default SubHeader