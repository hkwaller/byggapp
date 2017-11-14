import React from 'react'
import './information.css'

const Information = ({ rot, info }) => {
    if (info === undefined) return <div />
    console.log(info)

    return (
        <div className="information-container">
            { rot }
            { info }
        </div>
    )
}

export default Information