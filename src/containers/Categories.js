import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import SubHeader from '../components/SubHeader'

class Categories extends Component {
    render() {
        return (
            <div className="container">
                <SubHeader title={ 'Kategorier' } />
                { Object.keys(this.props.uppdrag).map(key => {
                    return <div key={ key } className="category">{ this.props.uppdrag[key].namn }</div>
                }) }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    uppdrag: state.uppdrag,
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Categories)
