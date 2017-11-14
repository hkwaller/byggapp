import React from 'react'
import Customer from './Customer'
import './anbud-list-item.css'

const AnbudListItem = props => {
    console.log(props)
    return (
        <div className="anbud-list-item-container">
            <h2>
                { props.anbud.description || 'Okänt' } ({ props.anbud.tasks ? Object.keys(props.anbud.tasks).length : '0' } uppdrag)
            </h2>
            <div>
                <Customer info={ props.anbud.customer } />
                <div className="anbud-list-item-information">
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