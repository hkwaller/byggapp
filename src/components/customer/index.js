import React from 'react'
import './customer.css'

const Customer = ({ info }) => {
    if (info === undefined) return <div />
    console.log(info)
    return (
        <div className="customer-container">
            <div>{ info.name }</div>
            <div>{ info.address }</div>
            <div>{ info.zip } { info.city }</div>
            <div>{ info.phoneNumber }</div>
        </div>
    )
}

export default Customer