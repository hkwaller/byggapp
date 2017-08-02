import React from 'react'
import { Link } from 'react-router-dom'
import FaPlus from 'react-icons/lib/fa/plus'

import AnbudListItem from '../../components/anbud-list-item'

import './overview.css'

const Overview = props => {
    console.log(props)
    return (
        <div className="overview-container">
            <div className="new-assignment-container">
                <Link to="/new-assignment" className="new-assignment-btn">
                    <FaPlus color="black" />
                    Nytt anbud
                </Link>
            </div>
            <div className="assignments-list-container">
                <h2>Dina anbud</h2>
                {
                    props.data.map(anbud => {
                        return (
                            <AnbudListItem key={ anbud.id } anbud={ anbud } />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Overview