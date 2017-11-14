import React from 'react'
import './information.css'

const Information = ({ rot, info }) => {
    console.log(info)

    return (
        <div className="information-container">
            <h2>Information</h2>
        
            <div>Rutavdrag: { rot }</div>
            <div>Tidsbruk: { info || 'Arbetet väntas ta 3-4 veckor' }</div>
        </div>
    )
}

export default Information