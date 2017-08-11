import React from 'react'

import './anbud-list-item.css'

const AnbudListItem = props => {
    return (
        <div className="anbud-list-item-container">
            <h3>{ props.anbud.description } ({ Object.keys(props.anbud.tasks).length } uppdrag)</h3>
            <div className="information">
                <div className="customer-container">
                    <div>{ props.anbud.customer.name }</div>
                    <div>{ props.anbud.customer.address }</div>
                    <div>{ props.anbud.customer.zip } { props.anbud.customer.city }</div>
                    <div>{ props.anbud.customer.phoneNumber }</div>
                </div>
                <div>
                    Totalpris:
                    <span className="total-price">
                        { props.anbud.totalPrice },-
                    </span>
                </div>
            </div>
        </div>
    )
}

export default AnbudListItem