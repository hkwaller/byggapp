import React from 'react'
import { Link } from 'react-router-dom'
import FaPlus from 'react-icons/lib/fa/plus'

import './overview.css'

const Overview = props => {
    return (
        <div className="overview-container">
            <div className="new-assignment-container">
                <Link to="/new-assignment" className="new-assignment-btn">
                    <FaPlus color="black" />
                    Nytt anbud
                </Link>
            </div>
            <div className="assignments-list-container">
                <ul className="assignments-list">
                    {
                        data.map(anbud => {
                            return (
                                <li>
                                    { anbud }
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Overview