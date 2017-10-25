import React from 'react'
import { Link } from 'react-router-dom'
import FaPlus from 'react-icons/lib/fa/plus'

import AnbudListItem from '../components/AnbudListItem'
import Loader from '../components/Loader'

import './overview.css'

const Overview = props => {
    if (Object.keys(props.anbud).length === 0) {
        return (
            <Loader />
        )
    }

    return (
        <div className="container">
            <div className="new-assignment-container">
                {
                    <Link to={ `/newcustomer/${Object.keys(props.anbud).length + 1}` } className="new-assignment-btn">
                        <FaPlus color="black" />
                        Nytt anbud
                    </Link>
                }
            </div>
            <div className="assignments-list-container">
                <h2>Alla anbud</h2>
                {
                    Object.keys(props.anbud).map(key => {
                        return (
                            <Link key={ key } to={ `assignment/${key}` }>
                                <AnbudListItem anbud={ props.anbud[key] } />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Overview