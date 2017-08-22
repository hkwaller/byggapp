import React from 'react'
import { connect } from 'react-redux'
import Loader from '../../components/loader'
import SubHeader from '../../components/sub-header'
import Customer from '../../components/customer'

function Assignment(props) {
    if (Object.keys(props.anbud).length === 0) {
        return (
            <Loader />
        )
    }
    
    const anbud = props.anbud[props.match.params.id]

    return (
        <div className="container">
            <SubHeader title={ anbud.description } />
            <Customer info={ anbud.customer } />
        </div>
    )
}

const mapStateToProps = state => ({
    anbud: state.anbud,
})

export default connect(
    mapStateToProps,
)(Assignment)