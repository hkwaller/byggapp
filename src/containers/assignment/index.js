import React from 'react'
import { connect } from 'react-redux'

function Assignment(props) {
    if (Object.keys(props.anbud).length === 0) {
        return (
            <div>
                im loading yo
            </div>
        )
    }
    
    const anbud = props.anbud[props.match.params.id]

    return (
        <div>
            im an already defined assignmnet by the name of { anbud.id }
            <hr />customer is: { anbud.customer.name }
        </div>
    )
}

const mapStateToProps = state => ({
    anbud: state.anbud,
})

export default connect(
    mapStateToProps,
)(Assignment)