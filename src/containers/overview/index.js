import React from 'react'
import { Link } from 'react-router-dom'
import FaPlus from 'react-icons/lib/fa/plus'

import AnbudListItem from '../../components/anbud-list-item'

import './overview.css'

const Overview = props => {
    return (
        <div className="overview-container">
            <div className="new-assignment-container">
                { /*<Link to={ `/newcustomer/${props.data.length + 1}` } className="new-assignment-btn">
                    <FaPlus color="black" />
                    Nytt anbud
    </Link>*/ }
            </div>
            <div className="assignments-list-container">
                <h2>Alla anbud</h2>
                { /*
                    Object.keys(props.data).map(key => {
                        return (
                            <Link key={ key } to={ `assignment/${key}` }>
                                <AnbudListItem anbud={ props.data[key] } />
                            </Link>
                        )
                    })
                */ }
            </div>
        </div>
    )
}

export default Overview