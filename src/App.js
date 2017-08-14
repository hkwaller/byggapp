import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from './actions'

import './App.css'

import Overview from './containers/overview'
import NewCustomer from './containers/new-customer'
import Assignment from './containers/assignment'
import Header from './components/header'

class App extends Component {
    componentWillMount() {
        this.props.actions.listenToAnbudChanges()
    }
    render() {
        return (
            <Router>
                <div style={ { padding: '2em' } }>
                    <Header />

                    <Route exact path="/" render={ props => <Overview { ...this.props } /> } />
                    <Route path="/newcustomer/:id" component={ NewCustomer } />
                    <Route path="/assignment/:id" component={ Assignment } />
                </div>
            </Router>
        )
    }
}

const mapStateToProps = state => ({
    anbud: state.anbud,
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)