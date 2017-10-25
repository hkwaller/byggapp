import React from 'react'
import { connect } from 'react-redux'
import Loader from '../components/Loader'
import SubHeader from '../components/SubHeader'
import Customer from '../components/Customer'
import Tasks from '../components/tasks/Tasks'
import './assignment.css'

function Assignment(props) {
    if (Object.keys(props.anbud).length === 0) {
        return (
            <Loader />
        )
    }
    
    const anbud = props.anbud[props.match.params.id]

    return (
        <div className="assignment-container">
            <SubHeader title={ anbud.description } />
            <Customer info={ anbud.customer } />
            <Tasks tasks={ anbud.tasks } />
        </div>
    )
}

const mapStateToProps = state => ({
    anbud: state.anbud,
})

export default connect(
    mapStateToProps,
)(Assignment)