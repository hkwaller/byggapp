import React from 'react'
import './customer.css'

const Customer = ({ info }) => {
    if (info === undefined) return <div />
    console.log(info)

    return (
        <div className="customer-outer-container">
            <h2>Kundinformation</h2>
            <div className="customer-container">
                <div className="legend">
                    <div>Namn</div>
                    <div>Address</div>
                    <div>Postnummer/Ort</div>
                    <div>Telefonnummer</div>
                </div>
                <div className="customer">
                    <div>{ info.name }</div>
                    <div>{ info.address }</div>
                    <div>{ info.zip } { info.city }</div>
                    <div>{ info.phoneNumber }</div>
                </div>
            </div>
        </div>
    )
}

export default Customer