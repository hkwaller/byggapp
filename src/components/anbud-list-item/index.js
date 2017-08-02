import React from 'react'

import './anbud-list-item.css'

const AnbudListItem = ({ anbud }) => {
    return (
        <div className="anbud-list-item-container">
            <h3>{ anbud.description }</h3>
            <div className="information">
                <div className="customer-container">
                    <div>{ anbud.customer.name }</div>
                    <div>{ anbud.customer.address }</div>
                    <div>{ anbud.customer.zip } { anbud.customer.city }</div>
                    <div>{ anbud.customer.phoneNumber }</div>
                </div>
                <div>
                    Totalpris:
                    <span className="total-price">
                        { anbud.totalPrice },-
                    </span>
                </div>
            </div>
        </div>
    )
}

export default AnbudListItem